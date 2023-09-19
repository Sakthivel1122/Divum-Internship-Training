package com.example.jwtapplication.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int userId;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "password")
    private String password;

    @Column(name = "login_count")
    private int logInCount;

    @Column(name = "is_active")
    private boolean isActive = true;

    @Column(name = "login_at")
    private Date logInAt;

    @CreatedDate
    @Column(name = "created_at")
    private Date createdAt;


//    @UpdateTimestamp
    @Column(name = "updated_at")
    private  Date updatedAt;

    public User(String name, String phoneNo, String emailId, String password) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
        this.password = password;
    }

    public User(int userId, String name, String phoneNo, String emailId, String password) {
        this.userId = userId;
        this.name = name;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
        this.password = password;
    }
    public User(){

    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

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

    public int getLogInCount() {
        return logInCount;
    }

    public void setLogInCount(int logInCount) {
        this.logInCount = logInCount;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Date getLogInAt() {
        return logInAt;
    }

    public void setLogInAt(Date logInAt) {
        this.logInAt = logInAt;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", name='" + name + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                ", logInCount=" + logInCount +
                ", isActive=" + isActive +
                ", logInAt=" + logInAt +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }

    @PrePersist
    public void before(){
        Date currentDate = new Date();
        this.createdAt = currentDate;
        this.updatedAt = currentDate;
    }

    @PostPersist
    public void after(){
        Date currentDate = new Date();
        this.updatedAt = currentDate;
    }
}
