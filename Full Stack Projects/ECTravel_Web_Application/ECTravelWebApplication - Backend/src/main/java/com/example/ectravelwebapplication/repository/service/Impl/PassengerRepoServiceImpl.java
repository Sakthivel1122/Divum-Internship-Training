package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Passenger;
import com.example.ectravelwebapplication.repository.PassengerRepo;
import com.example.ectravelwebapplication.repository.service.PassengerRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PassengerRepoServiceImpl implements PassengerRepoService {

    @Autowired
    PassengerRepo passengerRepo;

    @Override
    public void savePassenger(Passenger passenger){
        passengerRepo.save(passenger);
    }
}
