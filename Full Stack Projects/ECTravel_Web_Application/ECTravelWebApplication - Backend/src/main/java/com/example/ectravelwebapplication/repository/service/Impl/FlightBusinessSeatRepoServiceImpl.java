package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.FlightBusinessSeat;
import com.example.ectravelwebapplication.repository.FlightBusinessSeatRepo;
import com.example.ectravelwebapplication.repository.service.FlightBusinessSeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightBusinessSeatRepoServiceImpl implements FlightBusinessSeatRepoService {

    @Autowired
    FlightBusinessSeatRepo flightBusinessSeatRepo;

    @Override
    public void saveFlightBusinessSeat(FlightBusinessSeat flightBusinessSeat){
        flightBusinessSeatRepo.save(flightBusinessSeat);
    }

    @Override
    public List<FlightBusinessSeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status) {
        return flightBusinessSeatRepo.findByFlightDetails_FlightIdAndStatus(flightId,status);
    }

    @Override
    public FlightBusinessSeat findFlightBusinessSeatById(int flightBusinessSeatById){
        return flightBusinessSeatRepo.findById(flightBusinessSeatById).orElse(null);
    }
}
