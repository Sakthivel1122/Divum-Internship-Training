package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.TrainSeatTypePrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface TrainSeatTypePriceRepo extends JpaRepository<TrainSeatTypePrice, Integer> {
    void deleteByTrainDetails_TrainId(int trainId);

    void deleteAllByTrainDetails_TrainId(int trainId);
}
