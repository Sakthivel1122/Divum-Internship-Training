package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.FlightEconomySeat;
import com.example.ectravelwebapplication.repository.FlightEconomySeatRepo;
import com.example.ectravelwebapplication.repository.service.FlightEconomySeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightEconomySeatRepoServiceImpl implements FlightEconomySeatRepoService {

    @Autowired
    FlightEconomySeatRepo flightEconomySeatRepo;

    @Override
    public void saveFlightEconomySeat(FlightEconomySeat flightEconomySeat){
        flightEconomySeatRepo.save(flightEconomySeat);
    }
}
