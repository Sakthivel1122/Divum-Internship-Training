package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.Seat;
import com.example.ectravelwebapplication.repository.SeatRepo;
import com.example.ectravelwebapplication.repository.service.SeatRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatRepoServiceImpl implements SeatRepoService {

    @Autowired
    SeatRepo seatRepo;

    @Override
    public void saveSeat(Seat seat) {
        seatRepo.save(seat);
    }

    @Override
    public List<Seat> findAllByBusId(int busId){
        return seatRepo.findAllByBusId(busId);
    }

    @Override
    public void deleteAllByBusId(int busId){
        seatRepo.deleteAllByBusId(busId);
    }

    @Override
    public Seat getSeatById(int seatId){
        return seatRepo.findById(seatId).orElse(null);
    }
}
