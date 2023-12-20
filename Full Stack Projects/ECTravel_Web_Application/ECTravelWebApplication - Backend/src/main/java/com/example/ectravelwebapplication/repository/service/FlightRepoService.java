package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.Flight;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FlightRepoService {
    void saveFlight(Flight flight);

    List<Flight> getAllFlights();

    void deleteFlight(int flightId);

//    boolean updateFlight(UpdateFlightDTO updateFlightDTO);

    List<Flight> getAvailFlight(GetAvailFlightDTO getAvailFlightDTO);

    Flight findFlightById(int flightId);
}
