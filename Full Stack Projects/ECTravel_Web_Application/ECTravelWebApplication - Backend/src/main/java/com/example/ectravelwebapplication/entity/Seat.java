package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
public class Seat {
    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int seatId;

    @Getter
    @Setter
    private int busId;

    @Getter
    @Setter
    private Integer passengerId;

    @Getter
    @Setter
    private boolean status;

    @Getter
    @Setter
    private String type;

    @Getter
    @Setter
    private int seatNo;

    public Seat(int busId, Integer passengerId, boolean status, String type,int seatNo) {
        this.busId = busId;
        this.passengerId = passengerId;
        this.status = status;
        this.type = type;
        this.seatNo = seatNo;
    }
    public Seat(){}

    @Override
    public String toString() {
        return "Seat{" +
                "seatId=" + seatId +
                ", busId=" + busId +
                ", passengerId='" + passengerId + '\'' +
                ", status=" + status +
                ", type='" + type + '\'' +
                ", seatNo='" + seatNo + '\'' +
                '}';
    }
}
