package com.example.ectravelwebapplication.DTO;

import lombok.Data;

@Data
public class GetAvailFlightDTO {

    private String fromPlace;

    private String toPlace;

    private String pickUpDate;
}
