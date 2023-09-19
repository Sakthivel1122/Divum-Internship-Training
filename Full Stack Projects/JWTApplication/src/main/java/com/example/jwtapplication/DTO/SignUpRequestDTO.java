package com.example.jwtapplication.DTO;

import jakarta.persistence.Column;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

public class SignUpRequestDTO {

    private String name;

    private String phoneNo;

    private String emailId;

    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

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

    public SignUpRequestDTO(String name, String phoneNo, String emailId, String password) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
        this.password = password;
    }

    public SignUpRequestDTO() {
    }
}
