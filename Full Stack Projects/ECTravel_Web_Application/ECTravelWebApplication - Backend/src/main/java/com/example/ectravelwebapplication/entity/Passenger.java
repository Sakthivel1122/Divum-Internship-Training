package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int passengerId;

    private String passengerName;

//    private String passengerEmailId;

//    private String passengerMobileNo;

    private String preference;

    private int passengerAge;

    private int tripId;

    @Column(nullable = true)
    private Integer seatId;

//    private int transportId;

    private int userId;

    private String gender;

    public Passenger(String passengerName, String preference, int passengerAge, int tripId, Integer seatId, int userId,String gender) {
        this.passengerName = passengerName;
//        this.passengerEmailId = passengerEmailId;
//        this.passengerMobileNo = passengerMobileNo;
        this.preference = preference;
        this.passengerAge = passengerAge;
        this.tripId = tripId;
        this.seatId = seatId;
//        this.transportId = transportId;
        this.userId = userId;
        this.gender = gender;
    }
}
