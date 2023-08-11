package com.example.reactjsspringcrudapp.DTO;

public class CustomerSaveDTO {
    private String customerName;
    private String customerAddress;
    private Long mobile;

    public CustomerSaveDTO() {
    }

    public CustomerSaveDTO( String customerName, String customerAddress, Long mobile) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.mobile = mobile;
    }


    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "CustomerDTO{" +
                "customerName='" + customerName + '\'' +
                ", customerAddress='" + customerAddress + '\'' +
                ", mobile=" + mobile +
                '}';
    }
}
