package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.TrainSeatType;
import com.example.ectravelwebapplication.repository.TrainSeatTypeRepo;
import com.example.ectravelwebapplication.repository.service.TrainSeatTypeRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
public class TrainSeatTypeRepoImpl implements TrainSeatTypeRepoService {

    @Lazy
    @Autowired
    TrainSeatTypeRepo trainSeatTypeRepo;

    @Override
    public TrainSeatType findById(int trainSeatTypeId){
//        return new TrainSeatType();
        return trainSeatTypeRepo.findById(trainSeatTypeId).orElse(null);
    }
}
