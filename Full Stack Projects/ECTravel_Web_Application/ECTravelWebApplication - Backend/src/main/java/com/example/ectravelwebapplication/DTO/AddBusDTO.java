package com.example.ectravelwebapplication.DTO;

import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.LifecycleState;

import java.util.List;

public class AddBusDTO {

    @Getter
    @Setter
    private String busName;

    @Getter
    @Setter
    private String fromPlace;

    @Getter
    @Setter
    private String toPlace;

    @Getter
    @Setter
    private String price;

    @Getter
    @Setter
    private String busType;

    @Getter
    @Setter
    private String seatType;

    @Getter
    @Setter
    private String pickUpDate;

    @Getter
    @Setter
    private String pickUpTime;

    @Getter
    @Setter
    private String dropDate;

    @Getter
    @Setter
    private String dropTime;

    @Getter
    @Setter
    private String rating;

    @Getter
    @Setter
    private List<AddBusPickUpDrop> pickUps;

    @Getter
    @Setter
    private List<AddBusPickUpDrop> drops;


    public AddBusDTO(){

    }
}
