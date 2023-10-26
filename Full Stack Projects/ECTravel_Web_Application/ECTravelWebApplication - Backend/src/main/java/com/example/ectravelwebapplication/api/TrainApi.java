package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.AddTrainDTO;
import com.example.ectravelwebapplication.DTO.GetAllTrainResponseDTO;
import com.example.ectravelwebapplication.DTO.GetAvailTrainRequestDTO;
import org.springframework.http.ResponseEntity;
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
}
