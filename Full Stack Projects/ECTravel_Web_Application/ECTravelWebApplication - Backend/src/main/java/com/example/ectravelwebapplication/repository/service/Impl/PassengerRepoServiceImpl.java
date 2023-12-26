package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Passenger;
import com.example.ectravelwebapplication.repository.PassengerRepo;
import com.example.ectravelwebapplication.repository.service.PassengerRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassengerRepoServiceImpl implements PassengerRepoService {

    @Autowired
    PassengerRepo passengerRepo;

    @Override
    public void savePassenger(Passenger passenger){
        passengerRepo.save(passenger);
    }

    @Override
    public List<Passenger> findPassengerByTripId(int tripId){
        return passengerRepo.findByTripId(tripId);
    }

    @Override
    public Passenger findPassengerById(int passengerId){
        return passengerRepo.findById(passengerId).orElse(null);
    }
}
