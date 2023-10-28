package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table
public class TrainSeatTypePrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainSeatTypePriceId;

    @ManyToOne
    @JoinColumn(name = "fk_train_details")
    private Train trainDetails; // F

    @ManyToOne
    @JoinColumn(name = "fk_seat_type_details")
    private TrainSeatType seatTypeDetails; // F

    private String price;

    public TrainSeatTypePrice(Train trainDetails, TrainSeatType seatTypeDetails, String price) {
        this.trainDetails = trainDetails;
        this.seatTypeDetails = seatTypeDetails;
        this.price = price;
    }
}
