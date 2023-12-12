package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface FlightRepo extends JpaRepository<Flight, Integer> {

    List<Flight> findByFromPlaceAndToPlaceAndPickUpDate(String fromPlace, String toPlace, String pickUpDate);
}
