package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.AddFlightDTO;
import com.example.ectravelwebapplication.DTO.FlightPaymentDTO;
import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.api.FlightApi;
import com.example.ectravelwebapplication.entity.Flight;
import com.example.ectravelwebapplication.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FlightController implements FlightApi {

    @Autowired
    FlightService flightService;

    @Override
    public ResponseEntity<String> addFlight(@RequestBody AddFlightDTO addFlightDTO){
        return flightService.addFlight(addFlightDTO);
    }

    @Override
    public ResponseEntity<List<Flight>> getAllFlight(){
        return flightService.getAllFlights();
    }

    @Override
    @Transactional
    public ResponseEntity<String> deleteFlight(@PathVariable("flightId") int flightId){
        return flightService.deleteFlight(flightId);
    }

    @Override
    public ResponseEntity<String> updateFlight(@RequestBody UpdateFlightDTO updateFlightDTO){
        return flightService.updateFlight(updateFlightDTO);
    }

    @Override
    public ResponseEntity<List<Flight>> getAvailFlight(@RequestBody GetAvailFlightDTO getAvailFlightDTO){
        return flightService.getAvailFlight(getAvailFlightDTO);
    }

    @Override
    public ResponseEntity<String> busPayment(@RequestBody FlightPaymentDTO flightPaymentDTO){
        return flightService.flightPayment(flightPaymentDTO);
    }
}
