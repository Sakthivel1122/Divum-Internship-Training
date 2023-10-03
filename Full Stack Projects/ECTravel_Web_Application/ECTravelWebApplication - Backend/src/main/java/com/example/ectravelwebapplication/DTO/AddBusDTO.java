package com.example.ectravelwebapplication.DTO;

import org.apache.catalina.LifecycleState;

import java.util.List;

public class AddBusDTO {

    private String busName;

    private String fromPlace;

    private String toPlace;

    private String price;

    private String busType;

    private String seatType;

    private String date;

    private String time;

    private String rating;

    private List<AddBusPickUpDrop> pickUps;

    private List<AddBusPickUpDrop> drops;

    public AddBusDTO(String busName, String fromPlace, String toPlace, String price, String busType, String seatType, String date, String time, String rating, List<AddBusPickUpDrop> pickUps, List<AddBusPickUpDrop> drops) {
        this.busName = busName;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.price = price;
        this.busType = busType;
        this.seatType = seatType;
        this.date = date;
        this.time = time;
        this.rating = rating;
        this.pickUps = pickUps;
        this.drops = drops;
    }

    public AddBusDTO(){

    }

    public List<AddBusPickUpDrop> getPickUps() {
        return pickUps;
    }

    public void setPickUps(List<AddBusPickUpDrop> pickUps) {
        this.pickUps = pickUps;
    }

    public List<AddBusPickUpDrop> getDrops() {
        return drops;
    }

    public void setDrops(List<AddBusPickUpDrop> drops) {
        this.drops = drops;
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

    public void setFromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getToPlace() {
        return toPlace;
    }

    public void setToPlace(String toPlace) {
        this.toPlace = toPlace;
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

}
