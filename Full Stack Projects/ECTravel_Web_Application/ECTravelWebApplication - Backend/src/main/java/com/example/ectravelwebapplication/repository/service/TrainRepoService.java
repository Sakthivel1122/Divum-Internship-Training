package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Train;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainRepoService {
    void saveTrain(Train train);

    List<Train> findAll();

    List<Train> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace, String toPlace, String pickUpDate);

    void deleteById(int trainId);

    Train findTrainById(int trainId);
}
