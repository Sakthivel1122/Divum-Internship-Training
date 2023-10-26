package com.example.ectravelwebapplication.DTO;

import lombok.Data;

@Data
public class GetAvailTrainRequestDTO {

    private String pickUpDate;

    private String fromPlace;

    private String toPlace;
}
