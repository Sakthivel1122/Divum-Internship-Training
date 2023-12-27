package com.example.ectravelwebapplication.DTO;

import lombok.Data;

import java.util.List;

@Data
public class TrainPaymentDTO {

    private List<TrainPassengerDTO> passengerList;

    private ContactDetailsDTO contactDetails;

    private TripDetailsDTO tripDetails;

    private String seatType;

    private int trainId;

    private int userId;

    private boolean paymentStatus;

    private String razorpayPaymentId;

    private String bookedDate;

    private String bookedTime;

}
