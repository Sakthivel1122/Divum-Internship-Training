package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.TrainStation;
import com.example.ectravelwebapplication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface TrainStationRepo extends JpaRepository<TrainStation, Integer> {

    List<TrainStation> findTrainStationsByTrainId(int trainId);

    List<TrainStation> findByTrainId(int trainId);

    void deleteByTrainId(int trainId);

}
