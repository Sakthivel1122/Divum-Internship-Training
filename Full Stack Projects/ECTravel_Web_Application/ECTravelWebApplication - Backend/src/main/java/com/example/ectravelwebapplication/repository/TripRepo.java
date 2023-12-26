package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface TripRepo extends JpaRepository<Trip, Integer> {

    List<Trip> findByUserId(int userId);
}
