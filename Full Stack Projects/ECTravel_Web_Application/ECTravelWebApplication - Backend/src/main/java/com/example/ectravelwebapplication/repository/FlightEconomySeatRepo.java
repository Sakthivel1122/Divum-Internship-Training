package com.example.ectravelwebapplication.repository;


import com.example.ectravelwebapplication.entity.FlightEconomySeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface FlightEconomySeatRepo extends JpaRepository<FlightEconomySeat, Integer> {

    List<FlightEconomySeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status);
}
