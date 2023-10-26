package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.BusPickUpDrop;
import com.example.ectravelwebapplication.repository.BusPickUpDropRepo;
import com.example.ectravelwebapplication.repository.service.BusPickUpDropRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusPickUpDropRepoServiceImpl implements BusPickUpDropRepoService {

    @Autowired
    BusPickUpDropRepo busPickUpDropRepo;
    @Override
    public void saveBusPickUpDrop(BusPickUpDrop busPickUpDrop) {
        busPickUpDropRepo.save(busPickUpDrop);
    }
    @Override
    public List<BusPickUpDrop> findAllByBusIdAndType(int busId, boolean type){
        return busPickUpDropRepo.findAllByBusIdAndType(busId, type);
    }

    @Override
    public void deleteAllByBusId(int busId){
        busPickUpDropRepo.deleteAllByBusId(busId);
    }
}
