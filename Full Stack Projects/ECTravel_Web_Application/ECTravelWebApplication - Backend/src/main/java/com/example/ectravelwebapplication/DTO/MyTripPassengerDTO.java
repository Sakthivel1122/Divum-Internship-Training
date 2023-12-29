package com.example.ectravelwebapplication.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MyTripPassengerDTO {
    private int passengerId;

    private String passengerName;

    private String preference;

    private int passengerAge;

    private int tripId;

    private Integer seatId;

    private int userId;

    private String gender;

    private int seatNo;
}
