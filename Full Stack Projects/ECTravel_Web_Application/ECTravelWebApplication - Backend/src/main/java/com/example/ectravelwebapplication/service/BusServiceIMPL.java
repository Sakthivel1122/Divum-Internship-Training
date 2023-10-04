package com.example.ectravelwebapplication.service;


import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.model.*;
import com.example.ectravelwebapplication.repository.BusPickUpDropRepo;
import com.example.ectravelwebapplication.repository.BusRepo;
import com.example.ectravelwebapplication.repository.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BusServiceIMPL implements BusService {

    @Autowired
    BusRepo busRepo;

    @Autowired
    BusPickUpDropRepo busPickUpDropRepo;

    @Autowired
    SeatRepo seatRepo;

    @Override
    public int addBus(AddBusDTO addBusDTO){
        Bus bus = new Bus(
                addBusDTO.getBusName(),
                addBusDTO.getFromPlace(),
                addBusDTO.getToPlace(),
                addBusDTO.getPrice(),
                addBusDTO.getBusType(),
                addBusDTO.getSeatType(),
                addBusDTO.getPickUpDate(),
                addBusDTO.getPickUpTime(),
                addBusDTO.getDropDate(),
                addBusDTO.getDropTime(),
                addBusDTO.getRating()
        );
        busRepo.save(bus);
        if(bus.getSeatType().equals("seater")) {
            for (int i = 0; i < 49; i++) {
                Seat seat = new Seat(
                        bus.getBusId(),
                        null,
                        false,
                        bus.getSeatType()
                );
                seatRepo.save(seat);
            }
        }
        else {
            for (int i = 0; i < 18; i++) {
                Seat seat = new Seat(
                        bus.getBusId(),
                        null,
                        false,
                        bus.getSeatType()
                );
                seatRepo.save(seat);
            }
        }
        // PickUpDrop
        for (int i = 0; i < addBusDTO.getPickUps().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    addBusDTO.getPickUps().get(i).getPlace(),
                    addBusDTO.getPickUps().get(i).getTime(),
                    true
            );
            busPickUpDropRepo.save(busPickUpDrop);
        }
        for (int i = 0; i < addBusDTO.getDrops().size(); i++) {
            BusPickUpDrop busPickUpDrop = new BusPickUpDrop(
                    bus.getBusId(),
                    addBusDTO.getDrops().get(i).getPlace(),
                    addBusDTO.getDrops().get(i).getTime(),
                    false
            );
            busPickUpDropRepo.save(busPickUpDrop);
        }
        return bus.getBusId();
    }


    @Override
    public List<SearchResponseDTO> getAvailBus(SearchDTO searchDTO) {
        List<Bus> buses = busRepo.findAllByFromPlaceAndToPlaceAndPickUpDate(searchDTO.getFromPlace(),searchDTO.getToPlace(),searchDTO.getDate());
        int len = buses.size();
        List<SearchResponseDTO> searchResponseDTOS = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            Bus bus = buses.get(i);
            int busId = bus.getBusId();
            List<Seat> seatList = seatRepo.findAllByBusId(busId);
            List<BusPickUpDrop> pickUpList = busPickUpDropRepo.findAllByBusIdAndType(busId,true);
            List<PickUpListDTO> pickUpListDTOList =  new ArrayList<>();
            for (int j = 0; j < pickUpList.size(); j++) {
                BusPickUpDrop busPickUpDrop = pickUpList.get(j);
                PickUpListDTO pickUpListDTO = new PickUpListDTO(
                        busPickUpDrop.getPlace(),
                        busPickUpDrop.getTime()
                );
                pickUpListDTOList.add(pickUpListDTO);
            }
            List<BusPickUpDrop> dropList = busPickUpDropRepo.findAllByBusIdAndType(busId,false);
            List<DropListDTO> dropListDTOList =  new ArrayList<>();
            for (int j = 0; j < dropList.size(); j++) {
                BusPickUpDrop busPickUpDrop = dropList.get(j);
                DropListDTO dropListDTO = new DropListDTO(
                        busPickUpDrop.getPlace(),
                        busPickUpDrop.getTime()
                );
                dropListDTOList.add(dropListDTO);
            }
            SearchResponseDTO searchResponseDTO = new SearchResponseDTO(bus,seatList,pickUpListDTOList,dropListDTOList);
            searchResponseDTOS.add(searchResponseDTO);
        }
        return searchResponseDTOS;
    }
}
