package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.FlightBusinessSeat;
import org.springframework.stereotype.Service;

@Service
public interface FlightBusinessSeatRepoService {
    void saveFlightBusinessSeat(FlightBusinessSeat flightBusinessSeat);
}
