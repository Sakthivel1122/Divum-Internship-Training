package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class TrainSeatTypePrice {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int trainSeatTypePriceId;

    private int trainId; // F

    private int seatTypeId; // F

    private String price;
}
