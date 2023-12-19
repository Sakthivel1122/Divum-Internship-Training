package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.api.BusApi;
import com.example.ectravelwebapplication.service.BusService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BusController implements BusApi {

    @Autowired
    BusService busService;

    @Override
    public ResponseEntity<String> addBus(@RequestBody AddBusDTO addBusDTO) {
        return busService.addBus(addBusDTO);
    }

    @Override
    public List<SearchResponseDTO> getAvailBus(@RequestBody SearchDTO searchDTO){
        return busService.getAvailBus(searchDTO);
    }

    @Override
    public ResponseEntity<List<GetAllBusDTO>> getAllBus(){
        return busService.getAllBus();
    }


    @Override
    @Transactional
    public ResponseEntity<String> deleteBus(@PathVariable("busId") int busId) {
        return busService.deleteBus(busId);
    }


    @Override
    @Transactional
    public ResponseEntity<String> updateBus(@RequestBody UpdateBusDTO updateBusDTO){
        return busService.updateBus(updateBusDTO);
    }

    @Override
    public ResponseEntity<String> busPayment(@RequestBody BusPaymentDTO busPaymentDTO){
        return busService.busPayment(busPaymentDTO);
    }
}
