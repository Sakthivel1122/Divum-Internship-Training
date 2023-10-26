package com.example.ectravelwebapplication.DTO;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.entity.BusPickUpDrop;
import lombok.Data;

import java.util.List;

@Data
public class UpdateBusDTO {
    private Bus busDetails;

    private List<BusPickUpDrop> busPickUpList;

    private List<BusPickUpDrop> busDropList;
}
