package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BusService {
    ResponseEntity<String> addBus(AddBusDTO addBusDTO);

    List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO);

    ResponseEntity<List<GetAllBusDTO>> getAllBus();

    ResponseEntity<String> deleteBus(int busId);

    ResponseEntity<String> updateBus(UpdateBusDTO updateBusDTO);

    ResponseEntity<String> busPayment(BusPaymentDTO busPaymentDTO);
}
