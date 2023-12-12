package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.AddFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.Flight;
import com.example.ectravelwebapplication.repository.service.FlightRepoService;
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

    @Override
    public ResponseEntity<String> addFlight(AddFlightDTO addFlightDTO){
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
                addFlightDTO.getAvailCount(),
                addFlightDTO.isMealFree(),
                addFlightDTO.getCabinBagLimit(),
                addFlightDTO.getCheckInLimit(),
                addFlightDTO.getStoppingDate(),
                addFlightDTO.getStoppingTime()
        );
        flightRepoService.saveFlight(flight);
        return new ResponseEntity<>("Train Added Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Flight>> getAllFlights() {
        return new ResponseEntity<List<Flight>>(flightRepoService.getAllFlights(),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteFlight(int flightId) {
        flightRepoService.deleteFlight(flightId);
        return new ResponseEntity<String>("Flight Deleted Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updateFlight(UpdateFlightDTO updateFlightDTO) {
        boolean result = flightRepoService.updateFlight(updateFlightDTO);
        return new ResponseEntity<String>(result ? "Flight Updated Successfully" : "Flight Update Failed", HttpStatus.OK);
    }
}
