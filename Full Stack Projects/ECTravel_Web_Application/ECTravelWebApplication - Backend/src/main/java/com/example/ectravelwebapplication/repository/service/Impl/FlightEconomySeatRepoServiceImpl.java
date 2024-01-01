package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.FlightEconomySeat;
import com.example.ectravelwebapplication.repository.FlightEconomySeatRepo;
import com.example.ectravelwebapplication.repository.service.FlightEconomySeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightEconomySeatRepoServiceImpl implements FlightEconomySeatRepoService {

    @Autowired
    FlightEconomySeatRepo flightEconomySeatRepo;

    @Override
    public void saveFlightEconomySeat(FlightEconomySeat flightEconomySeat){
        flightEconomySeatRepo.save(flightEconomySeat);
    }

    @Override
    public List<FlightEconomySeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status){
        return flightEconomySeatRepo.findByFlightDetails_FlightIdAndStatus(flightId, status);
    }

    @Override
    public FlightEconomySeat findFlightEconomySeatById(int flightEconomySeatId){
        return flightEconomySeatRepo.findById(flightEconomySeatId).orElse(null);
    }
}
