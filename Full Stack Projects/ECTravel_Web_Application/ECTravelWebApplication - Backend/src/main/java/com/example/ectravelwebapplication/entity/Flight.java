package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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

    private int availCount;

    private boolean isMealFree;

    private String cabinBagLimit;

    private String checkInLimit;
}
