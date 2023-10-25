package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BusService {
    ResponseEntity<String> addBus(AddBusDTO addBusDTO);

    List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO);

    ResponseEntity<List<GetAllBusDTO>> getAllBus();

    ResponseEntity<String> deleteBus(int busId);

    ResponseEntity<String> updateBus(UpdateBusDTO updateBusDTO);
}
