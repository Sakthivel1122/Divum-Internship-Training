package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.TrainSeat;
import com.example.ectravelwebapplication.repository.TrainSeatRepo;
import com.example.ectravelwebapplication.repository.service.TrainSeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainSeatRepoServiceImpl implements TrainSeatRepoService {

    @Autowired
    TrainSeatRepo trainSeatRepo;

    @Override
    public void saveTrainSeat(TrainSeat trainSeat) {
        trainSeatRepo.save(trainSeat);
    }

    @Override
    public List<TrainSeat> findAllByTrainDetails_TrainId(int trainId){
        return trainSeatRepo.findAllByTrainDetails_TrainId(trainId);
    }

    @Override
    public List<TrainSeat> findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(int trainId, int seatTypeId, boolean statue){
        return trainSeatRepo.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(trainId,seatTypeId,statue);
    }

    @Override
    public void deleteByTrainDetails_TrainId(int trainId){
        trainSeatRepo.deleteByTrainDetails_TrainId(trainId);
    }
}