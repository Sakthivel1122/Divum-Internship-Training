package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
public class BusPickUpDrop {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int pickUpDropId;

    @Getter
    @Setter
    private int busId;

    @Getter
    @Setter
    private String place;

    @Getter
    @Setter
    private String time;

    @Getter
    @Setter
    private boolean type;

    public BusPickUpDrop(int busId, String place, String time, boolean type) {
        this.busId = busId;
        this.place = place;
        this.time = time;
        this.type = type;
    }

    public BusPickUpDrop(){}

    @Override
    public String toString() {
        return "BusPickUpDrop{" +
                "pickUpDropId=" + pickUpDropId +
                ", busId=" + busId +
                ", place='" + place + '\'' +
                ", time='" + time + '\'' +
                ", type=" + type +
                '}';
    }
}
