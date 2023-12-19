package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Seat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SeatRepoService {
    void saveSeat(Seat seat);

    List<Seat> findAllByBusId(int busId);

    void deleteAllByBusId(int busId);

    Seat getSeatById(int seatId);
}
