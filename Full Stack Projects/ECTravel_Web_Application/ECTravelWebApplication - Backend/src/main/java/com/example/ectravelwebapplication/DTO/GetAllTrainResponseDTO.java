package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.Train;
import com.example.ectravelwebapplication.entity.TrainSeat;
import com.example.ectravelwebapplication.entity.TrainStation;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Optional;

@Data
@AllArgsConstructor
public class GetAllTrainResponseDTO {

    private Train train;

    private List<TrainSeatDetailsDTO> trainSeatDetails;

    private List<TrainStation> trainStationList;
}
