package com.example.jwtapplication.DTO;

public class SignUpUpdateDTO {
    private int userId;
    private String name;

    private String phoneNo;

    private String emailId;

    private String password;

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

    public SignUpUpdateDTO(int userId, String name, String phoneNo, String emailId, String password) {
        this.userId = userId;
        this.name = name;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
        this.password = password;
    }

    @Override
    public String toString() {
        return "SignUpUpdateDTO{" +
                "userId=" + userId +
                ", name='" + name + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
