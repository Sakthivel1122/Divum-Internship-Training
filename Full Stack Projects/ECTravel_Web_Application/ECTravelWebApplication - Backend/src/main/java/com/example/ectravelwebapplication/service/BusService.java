package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.AddBusDTO;
import com.example.ectravelwebapplication.DTO.SearchResponseDTO;
import com.example.ectravelwebapplication.model.Bus;
import com.example.ectravelwebapplication.DTO.SearchDTO;

import java.util.List;

public interface BusService {
    int addBus(AddBusDTO addBusDTO);

    List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO);
}
