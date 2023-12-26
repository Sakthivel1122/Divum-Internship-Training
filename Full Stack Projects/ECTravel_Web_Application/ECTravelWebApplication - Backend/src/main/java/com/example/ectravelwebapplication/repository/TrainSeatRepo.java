package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.TrainSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface TrainSeatRepo extends JpaRepository<TrainSeat, Integer> {
    List<TrainSeat> findAllByTrainDetails_TrainId(int trainId);

    List<TrainSeat> findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(int trainId,int seatTypeId,boolean status);

    void deleteByTrainDetails_TrainId(int trainId);

    List<TrainSeat> findByStatusAndTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(boolean status,int trainId,int seatTypeId);

    List<TrainSeat> findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(int trainId,int seatTypeId);

    List<TrainSeat> findByTrainDetails_TrainId(int trainId);

    List<TrainSeat> findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(int trainId,int seatTypeId,boolean status);

    TrainSeat findByPassengerDetails_PassengerId(int passengerId);
}
