package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Bus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BusRepoService {
    void saveBus(Bus bus);

    void deleteById(int busId);

    Bus findById(int busId);

    List<Bus> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace, String toPlace, String pickUpDate);

    List<Bus> findAllBus();
}
