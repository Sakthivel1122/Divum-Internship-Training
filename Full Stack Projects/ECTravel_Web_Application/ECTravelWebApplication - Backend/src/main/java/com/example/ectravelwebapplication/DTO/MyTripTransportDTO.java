package com.example.ectravelwebapplication.DTO;

import jakarta.annotation.sql.DataSourceDefinitions;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyTripTransportDTO {

    private String transportName;

    private String transportType;

    private String fromPlace;

    private String toPlace;

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

    private String price;

    private String busType;

    private String seatType;

    private String rating;

}
