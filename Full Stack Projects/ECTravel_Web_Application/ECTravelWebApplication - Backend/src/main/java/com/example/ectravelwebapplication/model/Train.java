package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class Train {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainId;

    private String trainName;

    private String fromPlace;

    private String toPlace;

    private String rating;

    public Train(String trainName, String fromPlace, String toPlace, String rating) {
        this.trainName = trainName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.rating = rating;
    }
}
