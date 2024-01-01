package com.example.ectravelwebapplication.repository;


import com.example.ectravelwebapplication.entity.FlightBusinessSeat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface FlightBusinessSeatRepo extends JpaRepository<FlightBusinessSeat, Integer> {

    List<FlightBusinessSeat> findByFlightDetails_FlightIdAndStatus(int flightId, boolean status);

}
