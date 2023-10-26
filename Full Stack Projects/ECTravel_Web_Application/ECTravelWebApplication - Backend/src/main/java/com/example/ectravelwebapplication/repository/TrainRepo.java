package com.example.ectravelwebapplication.repository;


import com.example.ectravelwebapplication.entity.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface TrainRepo extends JpaRepository<Train, Integer> {

    List<Train> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace,String toPlace,String pickUpDate);
}