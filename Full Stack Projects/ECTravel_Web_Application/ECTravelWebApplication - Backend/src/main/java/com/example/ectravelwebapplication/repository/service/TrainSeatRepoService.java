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

    List<TrainSeat> findByStatusAndTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(boolean status, int trainId, int seatTypeId);

    List<TrainSeat> findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(int trainId, int seatTypeId);

    List<TrainSeat> findByTrainDetails_TrainId(int trainId);

    List<TrainSeat> findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(int trainId, int trainSeatTypeId, boolean status);

    TrainSeat findTrainSeatById(int trainSeatId);

    TrainSeat findByPassengerDetails_PassengerId(int passengerId);
}
