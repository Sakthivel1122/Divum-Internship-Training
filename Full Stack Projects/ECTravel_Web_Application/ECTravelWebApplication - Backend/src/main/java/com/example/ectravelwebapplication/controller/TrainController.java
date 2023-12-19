package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.api.TrainApi;
import com.example.ectravelwebapplication.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class TrainController implements TrainApi {

    @Autowired
    TrainService trainService;

    @Override
    public ResponseEntity<String> addTrain(@RequestBody AddTrainDTO addTrainDTO){
        return trainService.addTrain(addTrainDTO);
    }

    @Override
    public ResponseEntity<List<GetAllTrainResponseDTO>> getAllTrain(){
        return trainService.getAllTrain();
    }

    @Override
    public ResponseEntity<List<GetAllTrainResponseDTO>> getAvailTrain(@RequestBody GetAvailTrainRequestDTO getAvailTrainRequestDTO){
        return trainService.getAvailTrain(getAvailTrainRequestDTO);
    }

    @Override
    @Transactional
    public ResponseEntity<String> deleteTrain(@PathVariable("trainId") int trainId){
        return trainService.deleteTrain(trainId);
    }

    @Override
    @Transactional
    public ResponseEntity<String> updateTrain(@RequestBody UpdateTrainDTO updateTrainDTO){
        return trainService.updateTrain(updateTrainDTO);
    }

    @Override
    public ResponseEntity<String> trainPayment(@RequestBody TrainPaymentDTO trainPaymentDTO){
        return trainService.trainPayment(trainPaymentDTO);
    }
}
