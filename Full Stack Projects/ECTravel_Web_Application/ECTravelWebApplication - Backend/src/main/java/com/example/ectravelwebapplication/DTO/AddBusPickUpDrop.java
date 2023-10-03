package com.example.ectravelwebapplication.DTO;

public class AddBusPickUpDrop {
    private String place;

    private String time;


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


    public AddBusPickUpDrop(String place, String time, boolean type) {
        this.place = place;
        this.time = time;
    }

    @Override
    public String toString() {
        return "AddBusPickUpDrop{" +
                "place='" + place + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}
