package com.example.ectravelwebapplication.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusPaymentDTO {

    private List<BusPassengerDTO> passengerList;

    private ContactDetailsDTO contactDetails;

    private TripDetailsDTO tripDetails;

    private int busId;

    private int userId;

    private boolean paymentStatus;

    private String razorpayPaymentId;

    private String bookedDate;

    private String bookedTime;
}
