package com.example.ectravelwebapplication.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tripId;

    private String tripType;

    private String fromPlace;

    private String toPlace;

    private String pickUpDate;

    private String pickUpTime;

    private String dropDate;

    private String dropTime;

    private int tripPrice;

    private boolean paymentStatus;

    private String razorpayPaymentId;

    private int userId;

    public Trip(String tripType, String fromPlace, String toPlace, String pickUpDate, String pickUpTime, String dropDate, String dropTime, int tripPrice, boolean paymentStatus,String razorpayPaymentId,int userId) {
        this.tripType = tripType;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.dropDate = dropDate;
        this.dropTime = dropTime;
        this.tripPrice = tripPrice;
        this.paymentStatus = paymentStatus;
        this.razorpayPaymentId = razorpayPaymentId;
        this.userId = userId;
    }
}
