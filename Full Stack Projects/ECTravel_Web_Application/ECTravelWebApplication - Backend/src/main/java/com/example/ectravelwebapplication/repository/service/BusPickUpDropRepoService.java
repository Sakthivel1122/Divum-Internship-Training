package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.BusPickUpDrop;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BusPickUpDropRepoService {
    void saveBusPickUpDrop(BusPickUpDrop busPickUpDrop);

    List<BusPickUpDrop> findAllByBusIdAndType(int busId, boolean type);

    void deleteAllByBusId(int busId);
}
