package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.DTO.GetAvailFlightDTO;
import com.example.ectravelwebapplication.DTO.UpdateFlightDTO;
import com.example.ectravelwebapplication.entity.Flight;
import com.example.ectravelwebapplication.repository.FlightRepo;
import com.example.ectravelwebapplication.repository.service.FlightRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightRepoServiceImpl implements FlightRepoService {

    @Autowired
    FlightRepo flightRepo;

    @Override
    public void saveFlight(Flight flight) {
        flightRepo.save(flight);
    }

    @Override
    public List<Flight> getAllFlights(){
        return flightRepo.findAll();
    }

    @Override
    public void deleteFlight(int flightId){
        flightRepo.deleteById(flightId);
    }

//    @Override
//    public boolean updateFlight(UpdateFlightDTO updateFlightDTO) {
//        Flight flight = flightRepo.findById(updateFlightDTO.getFlightId()).orElse(null);
//        if(flight != null){
//            flight.setFlightName(updateFlightDTO.getFlightName());
//            flight.setFromPlace((updateFlightDTO.getFromPlace()));
//            flight.setToPlace(updateFlightDTO.getToPlace());
//            flight.setPickUpDate(updateFlightDTO.getPickUpDate());
//            flight.setPickUpTime(updateFlightDTO.getPickUpTime());
//            flight.setDropDate(updateFlightDTO.getDropDate());
//            flight.setDropTime(updateFlightDTO.getDropTime());
//            flight.setStopping(updateFlightDTO.getStopping());
//            flight.setPrice(updateFlightDTO.getPrice());
//            flight.setBusinessAvailCount(updateFlightDTO.getBusinessAvailCount());
//            flight.setEconomyAvailCount(updateFlightDTO.getEconomicAvailCount());
//            flight.setMealFree(updateFlightDTO.isMealFree());
//            flight.setCabinBagLimit(updateFlightDTO.getCabinBagLimit());
//            flight.setCheckInLimit(updateFlightDTO.getCheckInLimit());
//            flight.setStoppingDate(updateFlightDTO.getStoppingDate());
//            flight.setStoppingTime(updateFlightDTO.getStoppingTime());
//            flightRepo.save(flight);
//            return true;
//        }
//        return false;
//    }

    @Override
    public List<Flight> getAvailFlight(GetAvailFlightDTO getAvailFlightDTO){
        return flightRepo.findByFromPlaceAndToPlaceAndPickUpDate(getAvailFlightDTO.getFromPlace(),getAvailFlightDTO.getToPlace(),getAvailFlightDTO.getPickUpDate());
    }

    @Override
    public Flight findFlightById(int flightId){
        return flightRepo.findById(flightId).orElse(null);
    }
}
