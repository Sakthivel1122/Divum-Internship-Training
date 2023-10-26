package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class TrainSeatType {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int seatTypeId;

    private String seatType;
}
