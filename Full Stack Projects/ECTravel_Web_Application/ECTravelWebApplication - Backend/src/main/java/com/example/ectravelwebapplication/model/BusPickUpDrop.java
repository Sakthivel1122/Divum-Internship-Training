package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;

@Entity
@Table
public class BusPickUpDrop {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int pickUpDropId;

    private int busId;
    private String place;

    private String time;

    private boolean type;

    public BusPickUpDrop(int busId, String place, String time, boolean type) {
        this.busId = busId;
        this.place = place;
        this.time = time;
        this.type = type;
    }

    public BusPickUpDrop(){}
    public int getPickUpDropId() {
        return pickUpDropId;
    }

    public void setPickUpDropId(int pickUpDropId) {
        this.pickUpDropId = pickUpDropId;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isType() {
        return type;
    }

    public void setType(boolean type) {
        this.type = type;
    }

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
