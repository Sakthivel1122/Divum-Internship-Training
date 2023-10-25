package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.service.BusService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/bus")
public class BusController {

    @Autowired
    BusService busService;

    @PostMapping("/addBus")
    public ResponseEntity<String> addBus(@RequestBody AddBusDTO addBusDTO) {
        return busService.addBus(addBusDTO);
    }

    @PostMapping("/getAvailBus")
    public List<SearchResponseDTO> getAvailBus(@RequestBody SearchDTO searchDTO){
        return busService.getAvailBus(searchDTO);
    }
    @GetMapping("/getAllBus")
    public ResponseEntity<List<GetAllBusDTO>> getAllBus (){
        return busService.getAllBus();
    }

    @DeleteMapping("/deleteBus/{busId}")
    @Transactional
    public ResponseEntity<String> deleteBus(@PathVariable("busId") int busId) {
        return busService.deleteBus(busId);
    }

    @PutMapping("/updateBus")
    @Transactional
    public ResponseEntity<String> updateBus(@RequestBody UpdateBusDTO updateBusDTO){
        return busService.updateBus(updateBusDTO);
    }
}
