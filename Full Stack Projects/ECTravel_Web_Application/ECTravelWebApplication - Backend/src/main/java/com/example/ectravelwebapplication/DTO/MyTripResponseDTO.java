package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.Passenger;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyTripResponseDTO {

    private int tripId;

    private String PickUpPlace;

    private String pickUpDate;

    private String pickUpTime;

    private String dropPlace;

    private String dropDate;

    private String dropTime;

    private List<MyTripPassengerDTO> passengerList;

    private ContactDetailsDTO contactDetails;

    private MyTripTransportDTO myTripTransport;

    private String bookedDate;

    private String bookedTime;
}
