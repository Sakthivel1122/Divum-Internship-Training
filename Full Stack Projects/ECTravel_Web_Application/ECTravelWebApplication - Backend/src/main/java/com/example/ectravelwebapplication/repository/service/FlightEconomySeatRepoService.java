package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.FlightEconomySeat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FlightEconomySeatRepoService {
    void saveFlightEconomySeat(FlightEconomySeat flightEconomySeat);

    List<FlightEconomySeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status);

    FlightEconomySeat findFlightEconomySeatById(int flightEconomySeatId);
}
