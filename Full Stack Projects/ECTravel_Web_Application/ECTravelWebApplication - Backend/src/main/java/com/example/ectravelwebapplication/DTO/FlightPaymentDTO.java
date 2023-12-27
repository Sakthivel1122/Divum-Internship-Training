package com.example.ectravelwebapplication.DTO;

import lombok.Data;

@Data
public class FlightPaymentDTO {

    private FlightPassengerDTO passengerDetails;

    private ContactDetailsDTO contactDetails;

    private TripDetailsDTO tripDetails;

    private String classType;

    private int flightId;

    private int userId;

    private boolean paymentStatus;

    private String razorpayPaymentId;

    private String bookedDate;

    private String bookedTime;

}
