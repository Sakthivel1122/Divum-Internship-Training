package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.TrainSeat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainSeatRepoService {
    void saveTrainSeat(TrainSeat trainSeat);

    List<TrainSeat> findAllByTrainDetails_TrainId(int trainId);

    List<TrainSeat> findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(int trainId, int seatTypeId, boolean statue);

    void deleteByTrainDetails_TrainId(int trainId);
}
