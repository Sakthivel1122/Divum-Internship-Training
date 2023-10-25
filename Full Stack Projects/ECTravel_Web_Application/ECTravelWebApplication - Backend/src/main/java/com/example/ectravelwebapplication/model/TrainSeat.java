package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class TrainSeat {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int trainSeatId;

    @ManyToOne(targetEntity = Train.class)
    @JoinColumn(name = "trainId")
    private Train trainId; // F

    private int passengerId; // F = null

    private int trainSeatTypePriceId; // F
}
