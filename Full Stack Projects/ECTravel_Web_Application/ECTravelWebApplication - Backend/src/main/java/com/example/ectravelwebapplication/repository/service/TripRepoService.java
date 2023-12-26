package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Trip;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TripRepoService {
    void saveTrip(Trip trip);

    List<Trip> findTripByUserId(int userId);
}
