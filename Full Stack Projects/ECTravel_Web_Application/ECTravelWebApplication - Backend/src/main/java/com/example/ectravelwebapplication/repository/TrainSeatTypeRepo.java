package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.Train;
import com.example.ectravelwebapplication.entity.TrainSeatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface TrainSeatTypeRepo extends JpaRepository<TrainSeatType, Integer> {

}
