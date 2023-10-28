package com.example.ectravelwebapplication.DTO;

import lombok.Data;

import java.util.List;

@Data
public class AddTrainDTO {

    private String trainName;

    private String fromPlace;

    private String toPlace;

    private String rating;

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

    private List<String> prices;

    private List<TrainStationDTO> trainStationList;

}
