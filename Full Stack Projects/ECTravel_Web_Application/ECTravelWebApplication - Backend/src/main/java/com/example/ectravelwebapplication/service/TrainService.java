package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainService {
    ResponseEntity<String> addTrain(AddTrainDTO addTrainDTO);

    ResponseEntity<List<GetAllTrainResponseDTO>> getAllTrain();

    ResponseEntity<List<GetAllTrainResponseDTO>> getAvailTrain(GetAvailTrainRequestDTO getAvailTrainRequestDTO);

    ResponseEntity<String> deleteTrain(int trainId);

    ResponseEntity<String> updateTrain(UpdateTrainDTO updateTrainDTO);

    ResponseEntity<String> trainPayment(TrainPaymentDTO trainPaymentDTO);
}
