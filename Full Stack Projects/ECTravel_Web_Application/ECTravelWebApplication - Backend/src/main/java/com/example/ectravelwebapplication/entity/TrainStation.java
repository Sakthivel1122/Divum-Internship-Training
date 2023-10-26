package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class TrainStation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainStationId;

    private int trainId;

    private String stationName;

    private String stationTime;

    public TrainStation(int trainId, String stationName, String stationTime) {
        this.trainId = trainId;
        this.stationName = stationName;
        this.stationTime = stationTime;
    }
}
