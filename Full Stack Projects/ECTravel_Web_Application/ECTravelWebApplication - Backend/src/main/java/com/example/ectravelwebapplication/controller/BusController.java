package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.AddBusDTO;
import com.example.ectravelwebapplication.DTO.SearchResponseDTO;
import com.example.ectravelwebapplication.model.Bus;
import com.example.ectravelwebapplication.DTO.SearchDTO;
import com.example.ectravelwebapplication.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/bus")
public class BusController {

    @Autowired
    BusService busService;

    @PostMapping("/addBus")
    public int addBus(@RequestBody AddBusDTO addBusDTO) {
        return busService.addBus(addBusDTO);
    }

    @PostMapping("/getAvailBus")
    public List<SearchResponseDTO> getAvailBus(@RequestBody SearchDTO searchDTO){
        return busService.getAvailBus(searchDTO);
    }
}
