package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.AddFlightDTO;
import com.example.ectravelwebapplication.DTO.FlightPaymentDTO;
import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.Flight;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/flight")
public interface FlightApi {

    @PostMapping("addFlight")
    ResponseEntity<String> addFlight(@RequestBody AddFlightDTO addFlightDTO);

    @GetMapping("getAllFlights")
    ResponseEntity<List<Flight>> getAllFlight();

    @DeleteMapping("deleteFlight/{flightId}")
    ResponseEntity<String> deleteFlight(@PathVariable("flightId") int flightId);

    @PutMapping("updateFlight")
    ResponseEntity<String> updateFlight(@RequestBody UpdateFlightDTO updateFlightDTO);

    @PostMapping("getAvailFlight")
    ResponseEntity<List<Flight>> getAvailFlight(@RequestBody GetAvailFlightDTO getAvailFlightDTO);

    @PostMapping("flightPayment")
    ResponseEntity<String> busPayment(@RequestBody FlightPaymentDTO flightPaymentDTO);

}
