package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.AddFlightDTO;
import com.example.ectravelwebapplication.DTO.FlightPaymentDTO;
import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.*;
import com.example.ectravelwebapplication.repository.service.*;
import com.example.ectravelwebapplication.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceIMPL implements FlightService {

    @Autowired
    FlightRepoService flightRepoService;

    @Autowired
    TripRepoService tripRepoService;

    @Autowired
    PassengerRepoService passengerRepoService;

    @Autowired
    FlightBusinessSeatRepoService flightBusinessSeatRepoService;

    @Autowired
    FlightEconomySeatRepoService flightEconomySeatRepoService;

    @Override
    public ResponseEntity<String> addFlight(AddFlightDTO addFlightDTO) {
        Flight flight = new Flight(
                addFlightDTO.getFlightName(),
                addFlightDTO.getFromPlace(),
                addFlightDTO.getToPlace(),
                addFlightDTO.getPickUpDate(),
                addFlightDTO.getPickUpTime(),
                addFlightDTO.getDropDate(),
                addFlightDTO.getDropTime(),
                addFlightDTO.getStopping(),
                addFlightDTO.getPrice(),
                addFlightDTO.getBusinessAvailCount(),
                addFlightDTO.getEconomyAvailCount(),
                addFlightDTO.isMealFree(),
                addFlightDTO.getCabinBagLimit(),
                addFlightDTO.getCheckInLimit(),
                addFlightDTO.getStoppingDate(),
                addFlightDTO.getStoppingTime(),
                addFlightDTO.getBusinessAvailCount(),
                addFlightDTO.getEconomyAvailCount()
        );
        flightRepoService.saveFlight(flight);
        int seatNo = 1;
        for (int i = 0; i < addFlightDTO.getBusinessAvailCount(); i++) {
            FlightBusinessSeat flightBusinessSeat = new FlightBusinessSeat(flight, null, seatNo, false);
            seatNo++;
            flightBusinessSeatRepoService.saveFlightBusinessSeat(flightBusinessSeat);
        }
        for (int i = 0; i < addFlightDTO.getEconomyAvailCount(); i++) {
            FlightEconomySeat flightEconomySeat = new FlightEconomySeat(flight, null, seatNo, false);
            seatNo++;
            flightEconomySeatRepoService.saveFlightEconomySeat(flightEconomySeat);
        }
        return new ResponseEntity<>("Flight Added Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Flight>> getAllFlights() {
        return new ResponseEntity<List<Flight>>(flightRepoService.getAllFlights(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteFlight(int flightId) {
        flightRepoService.deleteFlight(flightId);
        return new ResponseEntity<String>("Flight Deleted Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updateFlight(UpdateFlightDTO updateFlightDTO) {
//        boolean result = flightRepoService.updateFlight(updateFlightDTO);
//        System.out.println(updateFlightDTO.toString());
        Flight flight = flightRepoService.findFlightById(updateFlightDTO.getFlightId());
        if (flight != null) {
            flight.setFlightName(updateFlightDTO.getFlightName());
            flight.setFromPlace((updateFlightDTO.getFromPlace()));
            flight.setToPlace(updateFlightDTO.getToPlace());
            flight.setPickUpDate(updateFlightDTO.getPickUpDate());
            flight.setPickUpTime(updateFlightDTO.getPickUpTime());
            flight.setDropDate(updateFlightDTO.getDropDate());
            flight.setDropTime(updateFlightDTO.getDropTime());
            flight.setStopping(updateFlightDTO.getStopping());
            flight.setPrice(updateFlightDTO.getPrice());
            flight.setBusinessAvailCount(updateFlightDTO.getBusinessAvailCount());
            flight.setEconomyAvailCount(updateFlightDTO.getEconomyAvailCount());
            flight.setMealFree(updateFlightDTO.isMealFree());
            flight.setCabinBagLimit(updateFlightDTO.getCabinBagLimit());
            flight.setCheckInLimit(updateFlightDTO.getCheckInLimit());
            flight.setStoppingDate(updateFlightDTO.getStoppingDate());
            flight.setStoppingTime(updateFlightDTO.getStoppingTime());
            flightRepoService.saveFlight(flight);
            return new ResponseEntity<String>("Flight Updated Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<String>("Flight Update Failed", HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<Flight>> getAvailFlight(GetAvailFlightDTO getAvailFlightDTO) {
        return new ResponseEntity<List<Flight>>(flightRepoService.getAvailFlight(getAvailFlightDTO), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> flightPayment(FlightPaymentDTO flightPaymentDTO) {
        if (!flightPaymentDTO.isPaymentStatus()) {
            return new ResponseEntity<>("Payment Failed", HttpStatus.BAD_REQUEST);
        }
        Trip trip = new Trip(
                flightPaymentDTO.getTripDetails().getTripType(),
                flightPaymentDTO.getTripDetails().getFromPlace(),
                flightPaymentDTO.getTripDetails().getToPlace(),
                flightPaymentDTO.getTripDetails().getPickUpDate(),
                flightPaymentDTO.getTripDetails().getPickUpTime(),
                flightPaymentDTO.getTripDetails().getDropDate(),
                flightPaymentDTO.getTripDetails().getDropTime(),
                flightPaymentDTO.getTripDetails().getTripPrice(),
                flightPaymentDTO.isPaymentStatus(),
                flightPaymentDTO.getRazorpayPaymentId(),
                flightPaymentDTO.getUserId(),
                flightPaymentDTO.getContactDetails().getEmailId(),
                flightPaymentDTO.getContactDetails().getMobileNo(),
                flightPaymentDTO.getFlightId(),
                flightPaymentDTO.getBookedDate(),
                flightPaymentDTO.getBookedTime()
        );
        tripRepoService.saveTrip(trip);

        Flight flight = flightRepoService.findFlightById(flightPaymentDTO.getFlightId());
        if (flightPaymentDTO.getClassType().equals("BUSINESS_CLASS")) {
            if (flight.getBusinessAvailCount() == 0) {
                return new ResponseEntity<String>("Fight Payment Failed", HttpStatus.BAD_REQUEST);
            }
            flight.setBusinessAvailCount(flight.getBusinessAvailCount() - 1);
            List<FlightBusinessSeat> flightBusinessSeatList = flightBusinessSeatRepoService.findByFlightDetails_FlightIdAndStatus(flight.getFlightId(),false);
            FlightBusinessSeat flightBusinessSeat = flightBusinessSeatList.get(0);
            flightBusinessSeat.setStatus(true);

            Passenger passenger = new Passenger(
                    flightPaymentDTO.getPassengerDetails().getName(),
                    flightPaymentDTO.getClassType(),
                    flightPaymentDTO.getPassengerDetails().getAge(),
                    trip.getTripId(),
                    flightBusinessSeat.getFlightBusinessSeatId(),
                    flightPaymentDTO.getUserId(),
                    flightPaymentDTO.getPassengerDetails().getGender()
            );
            passengerRepoService.savePassenger(passenger);
            flightBusinessSeat.setPassengerDetails(passenger);
            flightBusinessSeatRepoService.saveFlightBusinessSeat(flightBusinessSeat);
        } else if (flightPaymentDTO.getClassType().equals("ECONOMY_CLASS")) {
            if (flight.getEconomyAvailCount() == 0) {
                return new ResponseEntity<String>("Fight Payment Failed", HttpStatus.BAD_REQUEST);
            }
            flight.setEconomyAvailCount(flight.getEconomyAvailCount() - 1);
            List<FlightEconomySeat> flightBusinessSeatList = flightEconomySeatRepoService.findByFlightDetails_FlightIdAndStatus(flight.getFlightId(),false);
            FlightEconomySeat flightEconomySeat = flightBusinessSeatList.get(0);
            flightEconomySeat.setStatus(true);

            Passenger passenger = new Passenger(
                    flightPaymentDTO.getPassengerDetails().getName(),
                    flightPaymentDTO.getClassType(),
                    flightPaymentDTO.getPassengerDetails().getAge(),
                    trip.getTripId(),
                    flightEconomySeat.getFlightEconomySeatId(),
                    flightPaymentDTO.getUserId(),
                    flightPaymentDTO.getPassengerDetails().getGender()
            );
            passengerRepoService.savePassenger(passenger);
            flightEconomySeat.setPassengerDetails(passenger);
            flightEconomySeatRepoService.saveFlightEconomySeat(flightEconomySeat);
        } else {
            return new ResponseEntity<String>("Invalid Class Type", HttpStatus.BAD_REQUEST);
        }
        flightRepoService.saveFlight(flight);
        return new ResponseEntity<String>("Flight Payment Successful", HttpStatus.OK);
    }
}
