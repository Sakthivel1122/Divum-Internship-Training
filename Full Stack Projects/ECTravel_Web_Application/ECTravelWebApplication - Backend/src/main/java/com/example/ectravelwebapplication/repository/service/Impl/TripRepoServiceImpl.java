package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Trip;
import com.example.ectravelwebapplication.repository.TripRepo;
import com.example.ectravelwebapplication.repository.service.TripRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripRepoServiceImpl implements TripRepoService {

    @Autowired
    TripRepo tripRepo;

    @Override
    public void saveTrip(Trip trip) {
        tripRepo.save(trip);
    }
}
