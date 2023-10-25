package com.example.ectravelwebapplication.service;


import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.model.*;
import com.example.ectravelwebapplication.repository.BusPickUpDropRepo;
import com.example.ectravelwebapplication.repository.BusRepo;
import com.example.ectravelwebapplication.repository.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BusServiceIMPL implements BusService {

    @Autowired
    BusRepo busRepo;

    @Autowired
    BusPickUpDropRepo busPickUpDropRepo;

    @Autowired
    SeatRepo seatRepo;

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
        busRepo.save(bus);
        if(bus.getSeatType().equals("seater")) {
            for (int i = 0; i < 40; i++) {
                Seat seat = new Seat(
                        bus.getBusId(),
                        null,
                        false,
                        bus.getSeatType(),
                        i+1
                );
                seatRepo.save(seat);
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
                seatRepo.save(seat);
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
            busPickUpDropRepo.save(busPickUpDrop);
        }
        for (int i = 0; i < addBusDTO.getDrops().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    addBusDTO.getDrops().get(i).getPlace(),
                    addBusDTO.getDrops().get(i).getTime(),
                    false
            );
            busPickUpDropRepo.save(busPickUpDrop);
        }
        return new ResponseEntity<>("Bus Added Successfully",HttpStatus.OK);
    }


    @Override
    public List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO) {
        List<Bus> buses = busRepo.findAllByFromPlaceAndToPlaceAndPickUpDate(searchDTO.getFromPlace(),searchDTO.getToPlace(),searchDTO.getDate());
        int len = buses.size();
        List<SearchResponseDTO> searchResponseDTOS = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            Bus bus = buses.get(i);
            int busId = bus.getBusId();
            List<Seat> seatList = seatRepo.findAllByBusId(busId);
            List<BusPickUpDrop> pickUpList = busPickUpDropRepo.findAllByBusIdAndType(busId,true);
            List<PickUpListDTO> pickUpListDTOList =  new ArrayList<>();
            for (int j = 0; j < pickUpList.size(); j++) {
                BusPickUpDrop busPickUpDrop = pickUpList.get(j);
                PickUpListDTO pickUpListDTO = new PickUpListDTO(
                        busPickUpDrop.getPlace(),
                        busPickUpDrop.getTime()
                );
                pickUpListDTOList.add(pickUpListDTO);
            }
            List<BusPickUpDrop> dropList = busPickUpDropRepo.findAllByBusIdAndType(busId,false);
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
        List<Bus> allBusList = busRepo.findAll();
        for (int i = 0; i < allBusList.size(); i++) {
            Bus bus = allBusList.get(i);
            List<BusPickUpDrop> pickUpList = busPickUpDropRepo.findAllByBusIdAndType(bus.getBusId(),true);
            List<BusPickUpDrop> dropList = busPickUpDropRepo.findAllByBusIdAndType(bus.getBusId(),false);
            result.add(new GetAllBusDTO(bus,pickUpList,dropList));
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteBus(int busId) {
        busPickUpDropRepo.deleteAllByBusId(busId);
        seatRepo.deleteAllByBusId(busId);
        busRepo.deleteById(busId);
        return new ResponseEntity<>("Bus Deleted SuccessFully",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updateBus(UpdateBusDTO updateBusDTO){
        Bus bus = busRepo.findById(updateBusDTO.getBusDetails().getBusId()).orElse(null);
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
        busPickUpDropRepo.deleteAllByBusId(bus.getBusId());
        for (int i = 0; i < updateBusDTO.getBusPickUpList().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    updateBusDTO.getBusPickUpList().get(i).getPlace(),
                    updateBusDTO.getBusPickUpList().get(i).getTime(),
                    true
            );
            busPickUpDropRepo.save(busPickUpDrop);
        }
        for (int i = 0; i < updateBusDTO.getBusPickUpList().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    updateBusDTO.getBusPickUpList().get(i).getPlace(),
                    updateBusDTO.getBusPickUpList().get(i).getTime(),
                    false
            );
            busPickUpDropRepo.save(busPickUpDrop);
            }
        return new ResponseEntity<>("Bus Updated Successfully",HttpStatus.OK);
        }
        return new ResponseEntity<>("Bus Update Failed",HttpStatus.BAD_REQUEST);
    }

}
