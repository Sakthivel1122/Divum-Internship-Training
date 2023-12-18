package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Trip;
import org.springframework.stereotype.Service;

@Service
public interface TripRepoService {
    void saveTrip(Trip trip);
}
