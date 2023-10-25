package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.model.Bus;
import com.example.ectravelwebapplication.model.BusPickUpDrop;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GetAllBusDTO {

    private Bus busDetails;

    private List<BusPickUpDrop> busPickUpList;

    private List<BusPickUpDrop> busDropList;
}