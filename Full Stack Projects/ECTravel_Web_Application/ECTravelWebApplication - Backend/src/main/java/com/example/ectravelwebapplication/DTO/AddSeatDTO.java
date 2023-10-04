package com.example.ectravelwebapplication.DTO;

public class AddSeatDTO {

    private int busId;

    private String userEmail;

    private boolean status;

    private String type;

    public AddSeatDTO(int busId, String userEmail, boolean status, String type) {
        this.busId = busId;
        this.userEmail = userEmail;
        this.status = status;
        this.type = type;
    }
    public AddSeatDTO(){}
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
        return "AddSeatDTO{" +
                "busId=" + busId +
                ", userEmail='" + userEmail + '\'' +
                ", status=" + status +
                ", type='" + type + '\'' +
                '}';
    }
}
