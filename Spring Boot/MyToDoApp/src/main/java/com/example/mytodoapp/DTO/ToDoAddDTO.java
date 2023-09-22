package com.example.mytodoapp.DTO;

public class ToDoAddDTO {
    private String title;
    private String date;
    private String status;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ToDoAddDTO(String title, String date, String status) {
        this.title = title;
        this.date = date;
        this.status = status;
    }

    @Override
    public String toString() {
        return "ToDoAddDTO{" +
                "title='" + title + '\'' +
                ", date='" + date + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
