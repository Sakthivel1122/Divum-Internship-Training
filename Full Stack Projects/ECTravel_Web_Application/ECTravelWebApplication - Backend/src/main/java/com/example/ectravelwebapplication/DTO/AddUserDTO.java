package com.example.ectravelwebapplication.DTO;

import lombok.Getter;
import lombok.Setter;

public class AddUserDTO {

    @Getter
    @Setter
    private String firstName;

    @Getter
    @Setter
    private String lastName;

    @Getter
    @Setter
    private String emailId;

    @Getter
    @Setter
    private String mobileNo;

    @Getter
    @Setter
    private String gender;

    @Getter
    @Setter
    private String dob;

    @Getter
    @Setter
    private String city;

    @Getter
    @Setter
    private String state;

    @Getter
    @Setter
    private String password;


    public AddUserDTO(String firstName, String lastName, String emailId, String mobileNo, String dob,String gender, String city, String state, String password) {
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

    @Override
    public String toString() {
        return "AddUserDTO{" +
                "firstName='" + firstName + '\'' +
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
