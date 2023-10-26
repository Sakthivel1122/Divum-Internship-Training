package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface SeatRepo extends JpaRepository<Seat, Integer> {

    public List<Seat> findAllByBusId(int busId);

    public void deleteAllByBusId(int busId);

}
