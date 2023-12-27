package com.example.ectravelwebapplication.service.Impl;


import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.*;
import com.example.ectravelwebapplication.repository.service.*;
import com.example.ectravelwebapplication.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BusServiceIMPL implements BusService {

    @Autowired
    BusRepoService busRepoService;

    @Autowired
    BusPickUpDropRepoService busPickUpDropRepoService;

    @Autowired
    SeatRepoService seatRepoService;

    @Autowired
    PassengerRepoService passengerRepoService;

    @Autowired
    TripRepoService tripRepoService;

    @Override
    public ResponseEntity<String> addBus(AddBusDTO addBusDTO){
        Bus bus = new Bus(
                addBusDTO.getBusName(),
                addBusDTO.getFromPlace(),
                addBusDTO.getToPlace(),
                addBusDTO.getPrice(),
                addBusDTO.getBusType(),
                addBusDTO.getSeatType(),
                addBusDTO.getPickUpDate(),
                addBusDTO.getPickUpTime(),
                addBusDTO.getDropDate(),
                addBusDTO.getDropTime(),
                addBusDTO.getRating()
        );
        busRepoService.saveBus(bus);
        if(bus.getSeatType().equals("seater")) {
            for (int i = 0; i < 40; i++) {
                Seat seat = new Seat(
                        bus.getBusId(),
                        null,
                        false,
                        bus.getSeatType(),
                        i+1
                );
                seatRepoService.saveSeat(seat);
            }
        }
        else {
            for (int i = 0; i < 30; i++) {
                Seat seat = new Seat(
                        bus.getBusId(),
                        null,
                        false,
                        bus.getSeatType(),
                        i+1
                );
                seatRepoService.saveSeat(seat);
            }
        }
        // PickUpDrop
        for (int i = 0; i < addBusDTO.getPickUps().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    addBusDTO.getPickUps().get(i).getPlace(),
                    addBusDTO.getPickUps().get(i).getTime(),
                    true
            );
            busPickUpDropRepoService.saveBusPickUpDrop(busPickUpDrop);
        }
        for (int i = 0; i < addBusDTO.getDrops().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    addBusDTO.getDrops().get(i).getPlace(),
                    addBusDTO.getDrops().get(i).getTime(),
                    false
            );
            busPickUpDropRepoService.saveBusPickUpDrop(busPickUpDrop);
        }
        return new ResponseEntity<>("Bus Added Successfully",HttpStatus.OK);
    }


    @Override
    public List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO) {
        List<Bus> buses = busRepoService.findAllByFromPlaceAndToPlaceAndPickUpDate(searchDTO.getFromPlace(),searchDTO.getToPlace(),searchDTO.getDate());
        int len = buses.size();
        List<SearchResponseDTO> searchResponseDTOS = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            Bus bus = buses.get(i);
            int busId = bus.getBusId();
            List<Seat> seatList = seatRepoService.findAllByBusId(busId);
            List<BusPickUpDrop> pickUpList = busPickUpDropRepoService.findAllByBusIdAndType(busId,true);
            List<PickUpListDTO> pickUpListDTOList =  new ArrayList<>();
            for (int j = 0; j < pickUpList.size(); j++) {
                BusPickUpDrop busPickUpDrop = pickUpList.get(j);
                PickUpListDTO pickUpListDTO = new PickUpListDTO(
                        busPickUpDrop.getPlace(),
                        busPickUpDrop.getTime()
                );
                pickUpListDTOList.add(pickUpListDTO);
            }
            List<BusPickUpDrop> dropList = busPickUpDropRepoService.findAllByBusIdAndType(busId,false);
            List<DropListDTO> dropListDTOList =  new ArrayList<>();
            for (int j = 0; j < dropList.size(); j++) {
                BusPickUpDrop busPickUpDrop = dropList.get(j);
                DropListDTO dropListDTO = new DropListDTO(
                        busPickUpDrop.getPlace(),
                        busPickUpDrop.getTime()
                );
                dropListDTOList.add(dropListDTO);
            }
            SearchResponseDTO searchResponseDTO = new SearchResponseDTO(bus,seatList,pickUpListDTOList,dropListDTOList);
            searchResponseDTOS.add(searchResponseDTO);
        }
        return searchResponseDTOS;
    }

    @Override
    public ResponseEntity<List<GetAllBusDTO>> getAllBus() {
        List<GetAllBusDTO> result = new ArrayList<>();
        List<Bus> allBusList = busRepoService.findAllBus();
        for (int i = 0; i < allBusList.size(); i++) {
            Bus bus = allBusList.get(i);
            List<BusPickUpDrop> pickUpList = busPickUpDropRepoService.findAllByBusIdAndType(bus.getBusId(),true);
            List<BusPickUpDrop> dropList = busPickUpDropRepoService.findAllByBusIdAndType(bus.getBusId(),false);
            result.add(new GetAllBusDTO(bus,pickUpList,dropList));
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteBus(int busId) {
        busPickUpDropRepoService.deleteAllByBusId(busId);
        seatRepoService.deleteAllByBusId(busId);
        busRepoService.deleteById(busId);
        return new ResponseEntity<>("Bus Deleted SuccessFully",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updateBus(UpdateBusDTO updateBusDTO){
        Bus bus = busRepoService.findById(updateBusDTO.getBusDetails().getBusId());
        if(bus != null) {
        bus.setBusName(updateBusDTO.getBusDetails().getBusName());
        bus.setFromPlace(updateBusDTO.getBusDetails().getFromPlace());
        bus.setToPlace(updateBusDTO.getBusDetails().getToPlace());
        bus.setPrice(updateBusDTO.getBusDetails().getPrice());
        bus.setBusType(updateBusDTO.getBusDetails().getBusType());
        bus.setSeatType(updateBusDTO.getBusDetails().getSeatType());
        bus.setPickUpDate(updateBusDTO.getBusDetails().getPickUpDate());
        bus.setPickUpTime(updateBusDTO.getBusDetails().getPickUpTime());
        bus.setDropDate(updateBusDTO.getBusDetails().getDropDate());
        bus.setDropTime(updateBusDTO.getBusDetails().getDropTime());
        bus.setRating(updateBusDTO.getBusDetails().getRating());
        busPickUpDropRepoService.deleteAllByBusId(bus.getBusId());
        for (int i = 0; i < updateBusDTO.getBusPickUpList().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    updateBusDTO.getBusPickUpList().get(i).getPlace(),
                    updateBusDTO.getBusPickUpList().get(i).getTime(),
                    true
            );
            busPickUpDropRepoService.saveBusPickUpDrop(busPickUpDrop);
        }
        for (int i = 0; i < updateBusDTO.getBusPickUpList().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    updateBusDTO.getBusPickUpList().get(i).getPlace(),
                    updateBusDTO.getBusPickUpList().get(i).getTime(),
                    false
            );
            busPickUpDropRepoService.saveBusPickUpDrop(busPickUpDrop);
            }
        return new ResponseEntity<>("Bus Updated Successfully",HttpStatus.OK);
        }
        return new ResponseEntity<>("Bus Update Failed",HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> busPayment(BusPaymentDTO busPaymentDTO){
        if(!busPaymentDTO.isPaymentStatus()){
            return new ResponseEntity<>("Payment Failed",HttpStatus.BAD_REQUEST);
        }
        Trip trip = new Trip(
                busPaymentDTO.getTripDetails().getTripType(),
                busPaymentDTO.getTripDetails().getFromPlace(),
                busPaymentDTO.getTripDetails().getToPlace(),
                busPaymentDTO.getTripDetails().getPickUpDate(),
                busPaymentDTO.getTripDetails().getPickUpTime(),
                busPaymentDTO.getTripDetails().getDropDate(),
                busPaymentDTO.getTripDetails().getDropTime(),
                busPaymentDTO.getTripDetails().getTripPrice(),
                busPaymentDTO.isPaymentStatus(),
                busPaymentDTO.getRazorpayPaymentId(),
                busPaymentDTO.getUserId(),
                busPaymentDTO.getContactDetails().getEmailId(),
                busPaymentDTO.getContactDetails().getMobileNo(),
                busPaymentDTO.getBusId(),
                busPaymentDTO.getBookedDate(),
                busPaymentDTO.getBookedTime()
        );
        tripRepoService.saveTrip(trip);
        for (BusPassengerDTO passengerDetails : busPaymentDTO.getPassengerList()){
            Passenger passenger = new Passenger(
                    passengerDetails.getName(),
//                    busPaymentDTO.getContactDetails().getEmailId(),
//                    busPaymentDTO.getContactDetails().getMobileNo(),
                    null,
                    passengerDetails.getAge(),
                    trip.getTripId(),
                    passengerDetails.getSeatId(),
//                    busPaymentDTO.getBusId(),
                    busPaymentDTO.getUserId(),
                    passengerDetails.getGender()
            );
            passengerRepoService.savePassenger(passenger);
            Seat seat = seatRepoService.getSeatById(passengerDetails.getSeatId());
            seat.setStatus(true);
            seat.setPassengerId(passenger.getPassengerId());
            seatRepoService.saveSeat(seat);
        }

        return new ResponseEntity<String>("Payment Successful",HttpStatus.OK);
    }

}
