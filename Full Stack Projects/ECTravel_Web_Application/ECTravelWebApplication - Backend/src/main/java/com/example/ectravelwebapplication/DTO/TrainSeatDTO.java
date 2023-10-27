package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.TrainSeat;
import lombok.Data;

import java.util.List;

@Data
public class TrainSeatDTO {

    private TrainSeatDetailsDTO oneA;

    private TrainSeatDetailsDTO twoA;

    private TrainSeatDetailsDTO threeA;

    private TrainSeatDetailsDTO sleeper;

    private TrainSeatDetailsDTO secondSeater;

    private TrainSeatDetailsDTO chairCar;

}
