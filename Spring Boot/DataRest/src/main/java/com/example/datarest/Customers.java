package com.example.datarest;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Customers {

    @Id
    private int cId;
    private String cName;
    private String courseName;
    public int getcId() {
        return cId;
    }

    public void setcId(int cId) {
        this.cId = cId;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    @Override
    public String toString() {
        return "Customers{" +
                "cId=" + cId +
                ", cName='" + cName + '\'' +
                ", courseName='" + courseName + '\'' +
                '}';
    }

}
