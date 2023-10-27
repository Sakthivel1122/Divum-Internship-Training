package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.TrainSeatTypePrice;
import org.springframework.stereotype.Service;

@Service
public interface TrainSeatTypePriceRepoService {
    TrainSeatTypePrice saveTrainSeatTypePrice(TrainSeatTypePrice trainSeatTypePrice);

    void deleteByTrainDetails_TrainId(int trainId);

}
