package com.example.ectravelwebapplication.entity;

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

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

//    @OneToMany
//    @JoinColumn(name = "seat_list")
//    private List<TrainSeat> seatList;


    public Train(String trainName, String fromPlace, String toPlace, String rating, String pickUpDate, String pickUpTime, String dropDate, String dropTime) {
        this.trainName = trainName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.rating = rating;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.dropDate = dropDate;
        this.dropTime = dropTime;
    }
}
