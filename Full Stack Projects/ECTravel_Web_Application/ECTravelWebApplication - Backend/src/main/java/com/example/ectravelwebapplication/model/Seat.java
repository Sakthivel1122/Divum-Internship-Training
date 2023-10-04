package com.example.ectravelwebapplication.model;

import jakarta.persistence.*;

@Entity
@Table
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int seatId;

    private int busId;

    private String userEmail;

    private boolean status;

    private String type;

    public Seat(int busId, String userEmail, boolean status, String type) {
        this.busId = busId;
        this.userEmail = userEmail;
        this.status = status;
        this.type = type;
    }
    public Seat(){}
    public int getSeatId() {
        return seatId;
    }

    public void setSeatId(int seatId) {
        this.seatId = seatId;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Seat{" +
                "seatId=" + seatId +
                ", busId=" + busId +
                ", userEmail='" + userEmail + '\'' +
                ", status=" + status +
                ", type='" + type + '\'' +
                '}';
    }
}
