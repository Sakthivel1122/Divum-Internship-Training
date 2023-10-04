package com.example.ectravelwebapplication.DTO;

public class SearchDTO {
    private String vehicle;

    private String fromPlace;

    private String toPlace;

    private String date;

    public SearchDTO(String vehicle, String fromPlace, String toPlace, String date) {
        this.vehicle = vehicle;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.date = date;
    }
    public SearchDTO(){

    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "SearchDTO{" +
                "vehicle='" + vehicle + '\'' +
                ", fromPlace='" + fromPlace + '\'' +
                ", toPlace='" + toPlace + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
