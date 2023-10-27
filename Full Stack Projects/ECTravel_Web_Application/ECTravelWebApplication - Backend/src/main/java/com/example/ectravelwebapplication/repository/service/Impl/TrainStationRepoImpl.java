package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.TrainStation;
import com.example.ectravelwebapplication.repository.TrainStationRepo;
import com.example.ectravelwebapplication.repository.service.TrainStationRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainStationRepoImpl implements TrainStationRepoService {

    @Lazy
    @Autowired
    TrainStationRepo trainStationRepo;

    @Override
    public void saveTrainStation(TrainStation trainStation){
        trainStationRepo.save(trainStation);
    }

    @Override
    public List<TrainStation> findAllByTrainId(int trainId){
        return trainStationRepo.findTrainStationsByTrainId(trainId);
    }
}
