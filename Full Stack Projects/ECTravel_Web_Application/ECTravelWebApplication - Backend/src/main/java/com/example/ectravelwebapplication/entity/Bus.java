package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "bus")
public class Bus {

    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int busId;

    @Getter
    @Setter
    private String busName;

    @Getter
    @Setter
    private String fromPlace;

    @Getter
    @Setter
    private String toPlace;

    @Getter
    @Setter
    private String price;

    @Getter
    @Setter
    private String busType;

    @Getter
    @Setter
    private String seatType;

    @Getter
    @Setter
    private String pickUpDate;

    @Getter
    @Setter
    private String pickUpTime;

    @Getter
    @Setter
    private String dropDate;

    @Getter
    @Setter
    private String dropTime;

    @Getter
    @Setter
    private String rating;

    public Bus(String busName, String fromPlace, String toPlace, String price, String busType, String seatType, String pickUpDate, String pickUpTime, String dropDate, String dropTime, String rating) {
        this.busName = busName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.price = price;
        this.busType = busType;
        this.seatType = seatType;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.dropDate = dropDate;
        this.dropTime = dropTime;
        this.rating = rating;
    }

    public Bus() {
    }
}
