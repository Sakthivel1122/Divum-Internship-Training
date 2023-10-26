package com.example.ectravelwebapplication.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user_tbl")
public class User {

    @Id
    @Getter
    @Setter
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int userId;

    @Getter
    @Setter
    @Column(name = "first_name")
    private String firstName;

    @Getter
    @Setter
    @Column(name = "last_name")
    private String lastName;

    @Getter
    @Setter
    @Column(name = "emailId")
    private String emailId;

    @Getter
    @Setter
    @Column(name = "mobile_no")
    private String mobileNo;

    @Getter
    @Setter
    @Column(name = "dob")
    private String dob;

    @Getter
    @Setter
    private String gender;

    @Getter
    @Setter
    @Column(name = "city")
    private String city;

    @Getter
    @Setter
    @Column(name = "state")
    private String state;

    @Getter
    @Setter
    @Column(name = "password")
    private String password;

    public User(String firstName, String lastName, String emailId, String mobileNo, String dob, String gender, String city, String state, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.dob = dob;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.password = password;
    }

    public User(){

    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", emailId='" + emailId + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", dob='" + dob + '\'' +
                ", gender='" + gender + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
