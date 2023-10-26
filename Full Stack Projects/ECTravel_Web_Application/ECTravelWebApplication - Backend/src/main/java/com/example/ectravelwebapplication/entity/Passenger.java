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

    private String passengerEmailId;

    private String passengerMobileNo;

    public Passenger(String passengerName, String passengerEmailId, String passengerMobileNo) {
        this.passengerName = passengerName;
        this.passengerEmailId = passengerEmailId;
        this.passengerMobileNo = passengerMobileNo;
    }
}
