package com.example.ectravelwebapplication.entity;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_train_details")
    private Train trainDetails; // F

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_passenger_details")
    private Passenger passengerDetails; // F = null

    @ManyToOne
    @JoinColumn(name = "fk_train_seat_type_price_details")
    private TrainSeatTypePrice trainSeatTypePriceDetails; // F

    private boolean status;

    private int seatNo;

    public TrainSeat(Train trainDetails, Passenger passengerDetails, TrainSeatTypePrice trainSeatTypePriceDetails,boolean status,int seatNo) {
        this.trainDetails = trainDetails;
        this.passengerDetails = passengerDetails;
        this.trainSeatTypePriceDetails = trainSeatTypePriceDetails;
        this.status = status;
        this.seatNo = seatNo;
    }
}
