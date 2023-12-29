package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@NoArgsConstructor
public class FlightEconomySeat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int flightEconomySeatId;

    @ManyToOne
    @JoinColumn(name = "fk_fligt_details")
    private Flight flightDetails;

    @OneToOne
    @JoinColumn(name = "fk_passenger_details")
    private Passenger passengerDetails;

    private int seatNo;

    private boolean status;

    public FlightEconomySeat(Flight flightDetails,Passenger passengerDetails, int seatNo, boolean status) {
        this.flightDetails = flightDetails;
        this.passengerDetails = passengerDetails;
        this.seatNo = seatNo;
        this.status = status;
    }
}
