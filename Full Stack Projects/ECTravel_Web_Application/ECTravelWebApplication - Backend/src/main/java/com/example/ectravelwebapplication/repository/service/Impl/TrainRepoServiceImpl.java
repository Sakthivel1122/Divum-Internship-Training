package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Train;
import com.example.ectravelwebapplication.repository.TrainRepo;
import com.example.ectravelwebapplication.repository.service.TrainRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainRepoServiceImpl implements TrainRepoService {

    @Autowired
    TrainRepo trainRepo;

    @Override
    public void saveTrain(Train train){
        trainRepo.save(train);
    }

    @Override
    public List<Train> findAll(){
        return trainRepo.findAll();
    }

    @Override
    public List<Train> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace,String toPlace,String pickUpDate){
        return trainRepo.findAllByFromPlaceAndToPlaceAndPickUpDate(fromPlace,toPlace,pickUpDate);
    }

    @Override
    public void deleteById(int trainId){
        trainRepo.deleteById(trainId);
    }

    @Override
    public Train findTrainById(int trainId) {
        return trainRepo.findById(trainId).orElse(null);
    }
}
