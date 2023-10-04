package com.example.ectravelwebapplication.DTO;

public class PickUpListDTO {
    private String place;
    private String time;

    public PickUpListDTO(){

    }

    public PickUpListDTO(String place, String time) {
        this.place = place;
        this.time = time;
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
}
