package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.FlightBusinessSeat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FlightBusinessSeatRepoService {
    void saveFlightBusinessSeat(FlightBusinessSeat flightBusinessSeat);

    List<FlightBusinessSeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status);

    FlightBusinessSeat findFlightBusinessSeatById(int flightBusinessSeatById);
}
