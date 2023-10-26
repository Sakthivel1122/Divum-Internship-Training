package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.TrainSeatType;
import org.springframework.stereotype.Service;

@Service
public interface TrainSeatTypeRepoService {
    TrainSeatType findById(int trainSeatTypeId);
}
