package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.FlightEconomySeat;
import org.springframework.stereotype.Service;

@Service
public interface FlightEconomySeatRepoService {
    void saveFlightEconomySeat(FlightEconomySeat flightEconomySeat);
}
