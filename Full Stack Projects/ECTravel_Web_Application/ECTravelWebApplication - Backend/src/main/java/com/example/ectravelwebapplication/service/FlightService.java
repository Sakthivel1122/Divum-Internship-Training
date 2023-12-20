package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.AddFlightDTO;
import com.example.ectravelwebapplication.DTO.FlightPaymentDTO;
import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.Flight;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FlightService {
    ResponseEntity<String> addFlight(AddFlightDTO addFlightDTO);

    ResponseEntity<List<Flight>> getAllFlights();

    ResponseEntity<String> deleteFlight(int flightId);

    ResponseEntity<String> updateFlight(UpdateFlightDTO updateFlightDTO);

    ResponseEntity<List<Flight>> getAvailFlight(GetAvailFlightDTO getAvailFlightDTO);

    ResponseEntity<String> flightPayment(FlightPaymentDTO flightPaymentDTO);
}
