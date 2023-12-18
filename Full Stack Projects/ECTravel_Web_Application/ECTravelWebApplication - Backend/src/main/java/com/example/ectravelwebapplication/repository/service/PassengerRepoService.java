package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Passenger;
import com.example.ectravelwebapplication.repository.PassengerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface PassengerRepoService {

    void savePassenger(Passenger passenger);
}
