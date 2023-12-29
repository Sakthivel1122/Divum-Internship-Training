package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.FlightBusinessSeat;
import com.example.ectravelwebapplication.repository.FlightBusinessSeatRepo;
import com.example.ectravelwebapplication.repository.service.FlightBusinessSeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightBusinessSeatRepoServiceImpl implements FlightBusinessSeatRepoService {

    @Autowired
    FlightBusinessSeatRepo flightBusinessSeatRepo;

    @Override
    public void saveFlightBusinessSeat(FlightBusinessSeat flightBusinessSeat){
        flightBusinessSeatRepo.save(flightBusinessSeat);
    }
}
