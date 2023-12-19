package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.*;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/bus")
public interface BusApi {

    @PostMapping("/addBus")
    public ResponseEntity<String> addBus(@RequestBody AddBusDTO addBusDTO);

    @PostMapping("/getAvailBus")
    List<SearchResponseDTO> getAvailBus(@RequestBody SearchDTO searchDTO);

    @GetMapping("/getAllBus")
    ResponseEntity<List<GetAllBusDTO>> getAllBus();

    @DeleteMapping("/deleteBus/{busId}")
    ResponseEntity<String> deleteBus(@PathVariable("busId") int busId);

    @PutMapping("/updateBus")
    ResponseEntity<String> updateBus(@RequestBody UpdateBusDTO updateBusDTO);

    @PostMapping("busPayment")
    ResponseEntity<String> busPayment(@RequestBody BusPaymentDTO busPaymentDTO);
}
