package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.TrainStation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainStationRepoService {
    void saveTrainStation(TrainStation trainStation);

    List<TrainStation> findAllByTrainId(int trainId);

}
