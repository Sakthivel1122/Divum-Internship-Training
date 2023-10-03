package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bus")
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int busId;

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int pickUpDropId;

    private String busName;

    private String fromPlace;

    private String toPlace;

    private String price;

    private String busType;

    private String seatType;

    private String date;

    private String time;

    private String rating;

    public Bus() {
    }

    public Bus(String busName, String fromPlace, String toPlace, String price, String busType, String seatType, String date,String time, String rating) {
        this.busName = busName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.price = price;
        this.busType = busType;
        this.seatType = seatType;
        this.date = date;
        this.time = time;
        this.rating = rating;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public int getPickUpDropId() {
        return pickUpDropId;
    }

    public void setPickUpDropId(int pickUpDropId) {
        this.pickUpDropId = pickUpDropId;
    }

    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
    }

    public String getFromPlace() {
        return fromPlace;
    }

    public void setFromPlace(String from) {
        this.fromPlace = from;
    }

    public String getToPlace() {
        return toPlace;
    }

    public void setToPlace(String to) {
        this.toPlace = to;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getBusType() {
        return busType;
    }

    public void setBusType(String busType) {
        this.busType = busType;
    }

    public String getSeatType() {
        return seatType;
    }

    public void setSeatType(String seatType) {
        this.seatType = seatType;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }


    @Override
    public String toString() {
        return "Bus{" +
                "busId=" + busId +
                ", pickUpDropId=" + pickUpDropId +
                ", busName='" + busName + '\'' +
                ", fromPlace='" + fromPlace + '\'' +
                ", toPlace='" + toPlace + '\'' +
                ", price='" + price + '\'' +
                ", busType='" + busType + '\'' +
                ", seatType='" + seatType + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", rating='" + rating + '\'' +
                '}';
    }
}
