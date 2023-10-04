package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.model.Bus;
import com.example.ectravelwebapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface BusRepo extends JpaRepository<Bus, Integer> {
    public List<Bus> findAllByFromPlaceAndToPlaceAndPickUpDate(String fromPlace, String toPlace,String pickUpDate);
}
