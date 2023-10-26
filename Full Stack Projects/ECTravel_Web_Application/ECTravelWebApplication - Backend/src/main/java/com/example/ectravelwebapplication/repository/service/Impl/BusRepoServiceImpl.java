package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.repository.BusRepo;
import com.example.ectravelwebapplication.repository.service.BusRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusRepoServiceImpl implements BusRepoService {

    @Autowired
    BusRepo busRepo;

    @Override
    public void saveBus(Bus bus){
        busRepo.save(bus);
    }

    @Override
    public void deleteById(int busId){
        busRepo.deleteById(busId);
    }

    @Override
    public Bus findById(int busId){
        return busRepo.findById(busId).orElse(null);
    }
    @Override
    public List<Bus> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace, String toPlace, String pickUpDate){
        return busRepo.findAllByFromPlaceAndToPlaceAndPickUpDate(fromPlace,toPlace,pickUpDate);
    }

    @Override
    public List<Bus> findAllBus(){
        return busRepo.findAll();
    }
}
