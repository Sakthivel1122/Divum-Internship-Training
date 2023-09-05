package com.example.divumcrudapplication.DTO;
public class UserAddDTO {

    private String emailId;
    private String firstName;

    private String lastName;

    private String dob;

    private String mobileNumber;

    private String address;

    public UserAddDTO(String emailId, String firstName, String lastName, String dob, String mobileNumber, String address) {
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.mobileNumber = mobileNumber;
        this.address = address;
    }
    public UserAddDTO(){

    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "UserAddDTO{" +
                "emailId='" + emailId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob='" + dob + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
