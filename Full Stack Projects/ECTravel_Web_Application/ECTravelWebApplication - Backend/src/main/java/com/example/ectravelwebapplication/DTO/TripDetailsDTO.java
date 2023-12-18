package com.example.ectravelwebapplication.DTO;

import lombok.Data;

@Data
public class TripDetailsDTO {

    private String fromPlace;

    private String toPlace;

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

    private String tripType;

    private int tripPrice;
}
