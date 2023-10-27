package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.TrainSeatTypePrice;
import com.example.ectravelwebapplication.repository.TrainSeatTypePriceRepo;
import com.example.ectravelwebapplication.repository.service.TrainSeatTypePriceRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
public class TrainSeatTypePriceRepoImpl implements TrainSeatTypePriceRepoService {

    @Lazy
    @Autowired
    TrainSeatTypePriceRepo trainSeatTypePriceRepo;

    @Override
    public TrainSeatTypePrice saveTrainSeatTypePrice(TrainSeatTypePrice trainSeatTypePrice) {
        return trainSeatTypePriceRepo.save(trainSeatTypePrice);
    }

    @Override
    public void deleteByTrainDetails_TrainId(int trainId) {
        trainSeatTypePriceRepo.deleteByTrainDetails_TrainId(trainId);
    }

}
