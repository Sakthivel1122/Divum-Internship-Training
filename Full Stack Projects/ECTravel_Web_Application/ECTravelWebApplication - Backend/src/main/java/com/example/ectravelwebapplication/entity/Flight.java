package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@NoArgsConstructor
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    private int initialBusinessCount;

    private int initialEconomyCount;

    public Flight(String flightName, String fromPlace, String toPlace, String pickUpDate, String pickUpTime, String dropDate, String dropTime, String stopping, String price, int businessAvailCount, int economyAvailCount, boolean isMealFree, String cabinBagLimit, String checkInLimit, String stoppingDate, String stoppingTime,int initialBusinessCount,int initialEconomyCount) {
        this.flightName = flightName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.dropDate = dropDate;
        this.dropTime = dropTime;
        this.stopping = stopping;
        this.price = price;
        this.businessAvailCount = businessAvailCount;
        this.economyAvailCount = economyAvailCount;
        this.isMealFree = isMealFree;
        this.cabinBagLimit = cabinBagLimit;
        this.checkInLimit = checkInLimit;
        this.stoppingDate = stoppingDate;
        this.stoppingTime = stoppingTime;
        this.initialBusinessCount = initialBusinessCount;
        this.initialEconomyCount = initialEconomyCount;
    }
}
