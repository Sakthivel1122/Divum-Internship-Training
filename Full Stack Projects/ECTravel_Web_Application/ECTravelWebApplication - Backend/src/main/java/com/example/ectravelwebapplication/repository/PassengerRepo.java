package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface PassengerRepo extends JpaRepository<Passenger, Integer> {

    List<Passenger> findByTripId(int tripId);

}
