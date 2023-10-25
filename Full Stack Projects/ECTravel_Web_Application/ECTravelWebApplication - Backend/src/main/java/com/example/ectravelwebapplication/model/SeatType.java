package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class SeatType {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int seatTypeId;

    private String seatType;
}
