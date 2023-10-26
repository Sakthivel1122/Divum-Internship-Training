package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.entity.Seat;

import java.util.List;

public class SearchResponseDTO {

    private Bus bus;

    private List<Seat> seatList;

    private List<PickUpListDTO> pickUpList;

    private List<DropListDTO> dropList;

    public SearchResponseDTO(Bus bus, List<Seat> seatList, List<PickUpListDTO> pickUpList, List<DropListDTO> dropList) {
        this.bus = bus;
        this.seatList = seatList;
        this.pickUpList = pickUpList;
        this.dropList = dropList;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public List<Seat> getSeatList() {
        return seatList;
    }

    public void setSeatList(List<Seat> seatList) {
        this.seatList = seatList;
    }

    public List<PickUpListDTO> getPickUpList() {
        return pickUpList;
    }

    public void setPickUpList(List<PickUpListDTO> pickUpList) {

        this.pickUpList = pickUpList;
    }

    public List<DropListDTO> getDropList() {
        return dropList;
    }

    public void setDropList(List<DropListDTO> dropList) {
        this.dropList = dropList;
    }
}
