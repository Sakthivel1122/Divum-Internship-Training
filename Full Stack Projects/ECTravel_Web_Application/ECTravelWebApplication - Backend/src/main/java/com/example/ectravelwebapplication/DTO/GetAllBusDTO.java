package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.entity.BusPickUpDrop;
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