package com.example.ectravelwebapplication.DTO;

import lombok.Data;

@Data
public class UpdateFlightDTO {
    private int flightId;

    private String flightName;

    private String fromPlace;

    private String toPlace;

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

    private String stopping;

    private String price;

    private int businessAvailCount;

    private int economyAvailCount;

    private boolean isMealFree;

    private String cabinBagLimit;

    private String checkInLimit;

    private String stoppingDate;

    private String stoppingTime;
}
