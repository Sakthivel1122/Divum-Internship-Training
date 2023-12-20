package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/train")
public interface TrainApi {

    @PostMapping("addTrain")
    ResponseEntity<String> addTrain(@RequestBody AddTrainDTO addTrainDTO);


    @GetMapping("getAllTrain")
    ResponseEntity<List<GetAllTrainResponseDTO>> getAllTrain();

    @PostMapping("getAvailTrain")
    ResponseEntity<List<GetAllTrainResponseDTO>> getAvailTrain(@RequestBody GetAvailTrainRequestDTO getAvailTrainRequestDTO);

    @DeleteMapping("deleteTrain/{trainId}")
    ResponseEntity<String> deleteTrain(@PathVariable("trainId") int trainId);

    @PutMapping("updateTrain")
    ResponseEntity<String> updateTrain(@RequestBody UpdateTrainDTO updateTrainDTO);

    @PostMapping("trainPayment")
    ResponseEntity<String> trainPayment(@RequestBody TrainPaymentDTO trainPaymentDTO);
}
