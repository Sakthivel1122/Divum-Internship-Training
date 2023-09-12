package com.example.ectravelwebapplication.DTO;

public class LogInDTO {
    private String emailId;
    private String password;

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LogInDTO(String emailId, String password) {
        this.emailId = emailId;
        this.password = password;
    }

    @Override
    public String toString() {
        return "LogInDTO{" +
                "emailId=" + emailId +
                ", password=" + password +
                '}';
    }
}
