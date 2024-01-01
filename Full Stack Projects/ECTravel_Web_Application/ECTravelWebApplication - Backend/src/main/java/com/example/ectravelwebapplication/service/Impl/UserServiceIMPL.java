package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.*;
import com.example.ectravelwebapplication.repository.service.*;
import com.example.ectravelwebapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    UserRepoService userRepoService;

    @Autowired
    TripRepoService tripRepoService;

    @Autowired
    PassengerRepoService passengerRepoService;

    @Autowired
    BusRepoService busRepoService;

    @Autowired
    TrainRepoService trainRepoService;

    @Autowired
    TrainSeatRepoService trainSeatRepoService;

    @Autowired
    FlightRepoService flightRepoService;

    @Autowired
    SeatRepoService seatRepoService;

    @Autowired
    FlightBusinessSeatRepoService flightBusinessSeatRepoService;

    @Autowired
    FlightEconomySeatRepoService flightEconomySeatRepoService;

    @Override
    public String addUser(AddUserDTO addUserDTO){
        User user = new User(
                addUserDTO.getFirstName(),
                addUserDTO.getLastName(),
                addUserDTO.getEmailId(),
                addUserDTO.getMobileNo(),
                addUserDTO.getDob(),
                addUserDTO.getGender(),
                addUserDTO.getCity(),
                addUserDTO.getState(),
                addUserDTO.getPassword()
        );
        userRepoService.saveUser(user);
        return "Added Successfully";
    }

    @Override
    public ResponseEntity<LoginResponseDTO> userAuthentication(LogInDTO logInDTO){
        User user = userRepoService.findByEmailId(logInDTO.getEmailId());
        if((user != null && user.getPassword().equals(logInDTO.getPassword()))){
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO(user.getUserId(),user.getEmailId(),true);
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
        } else {
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO(null,null,false);
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public UserDetailsDTO getUserDetails(String emailId) {
        User user = userRepoService.findByEmailId(emailId);
        if(user == null){
            return null;
        }
        UserDetailsDTO userDetailsDTO = new UserDetailsDTO(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmailId(),
                user.getMobileNo(),
                user.getDob(),
                user.getCity(),
                user.getState()
        );
        return userDetailsDTO;
    }

    @Override
    public String updateUser(UpdateUserDTO updateUserDTO){
        User user = userRepoService.findById(updateUserDTO.getUserId());
        if(user != null){
            user.setFirstName(updateUserDTO.getFirstName());
            user.setLastName(updateUserDTO.getLastName());
            user.setDob(updateUserDTO.getDob());
            user.setMobileNo(updateUserDTO.getMobileNo());
            user.setCity(updateUserDTO.getCity());
            user.setState(updateUserDTO.getState());
            userRepoService.saveUser(user);
            return "Updated Successfully";
        }
        else {
            return "Update Failed";
        }
    }

    @Override
    public ResponseEntity<List<MyTripResponseDTO>> getMyTrips(MyTripDTO myTripDTO){
        List<Trip> tripList = tripRepoService.findTripByUserId(myTripDTO.getUserId());
        List<MyTripResponseDTO> completedTripList = new ArrayList<>();
        for(Trip trip : tripList){
            if(myTripDTO.getType().equals("COMPLETED")){
                if(trip.getPickUpDate().compareTo(myTripDTO.getCurrentDate()) >= 0){
                continue;
                }
            } else {
                if(trip.getPickUpDate().compareTo(myTripDTO.getCurrentDate()) < 0){
                    continue;
                }
            }
            List<Passenger> passengers = passengerRepoService.findPassengerByTripId(trip.getTripId());
            List<MyTripPassengerDTO> passengerList = new ArrayList<>();
            ContactDetailsDTO contactDetails = new ContactDetailsDTO(trip.getPassengerEmailId(),trip.getPassengerMobileNo());
            MyTripTransportDTO myTripTransportDTO = null;
            if(trip.getTripType().equals("BUS")){
                Bus bus = busRepoService.findById(trip.getTransportId());
                myTripTransportDTO = new MyTripTransportDTO(
                        bus.getBusName(),
                        trip.getTripType(),
                        bus.getFromPlace(),
                        bus.getToPlace(),
                        bus.getPickUpDate(),
                        bus.getPickUpTime(),
                        bus.getDropDate(),
                        bus.getDropTime(),
                        bus.getPrice(),
                        bus.getBusType(),
                        bus.getSeatType(),
                        bus.getRating()
                );
                for(Passenger passenger: passengers){
                    MyTripPassengerDTO myTripPassengerDTO = new MyTripPassengerDTO(
                            passenger.getPassengerId(),
                            passenger.getPassengerName(),
                            passenger.getPreference(),
                            passenger.getPassengerAge(),
                            passenger.getTripId(),
                            passenger.getSeatId(),
                            passenger.getUserId(),
                            passenger.getGender(),
                            seatRepoService.getSeatById(passenger.getSeatId()).getSeatNo()
                    );
                    passengerList.add(myTripPassengerDTO);
                }
            } else if (trip.getTripType().equals("TRAIN")){
                for(Passenger passenger: passengers){
                    MyTripPassengerDTO myTripPassengerDTO = new MyTripPassengerDTO(
                            passenger.getPassengerId(),
                            passenger.getPassengerName(),
                            passenger.getPreference(),
                            passenger.getPassengerAge(),
                            passenger.getTripId(),
                            passenger.getSeatId(),
                            passenger.getUserId(),
                            passenger.getGender(),
                            trainSeatRepoService.findTrainSeatById(passenger.getSeatId()).getSeatNo()
                    );
                    passengerList.add(myTripPassengerDTO);
                }

                Train train = trainRepoService.findTrainById(trip.getTransportId());
                TrainSeat trainSeat = trainSeatRepoService.findByPassengerDetails_PassengerId(passengerList.get(0).getPassengerId());
                String trainSeatPrice = trainSeat.getTrainSeatTypePriceDetails().getPrice();
                myTripTransportDTO = new MyTripTransportDTO(
                        train.getTrainName(),
                        trip.getTripType(),
                        train.getFromPlace(),
                        train.getToPlace(),
                        train.getPickUpDate(),
                        train.getPickUpTime(),
                        train.getDropDate(),
                        train.getDropTime(),
                        trainSeatPrice,
                        null,
                        null,
                        train.getRating()
                );
                for(Passenger passenger: passengers){
                    MyTripPassengerDTO myTripPassengerDTO = new MyTripPassengerDTO(
                            passenger.getPassengerId(),
                            passenger.getPassengerName(),
                            passenger.getPreference(),
                            passenger.getPassengerAge(),
                            passenger.getTripId(),
                            passenger.getSeatId(),
                            passenger.getUserId(),
                            passenger.getGender(),
                            trainSeatRepoService.findTrainSeatById(passenger.getSeatId()).getSeatNo()
                    );
                    passengerList.add(myTripPassengerDTO);
                }
            } else if (trip.getTripType().equals("FLIGHT")){
                Flight flight = flightRepoService.findFlightById(trip.getTransportId());
                myTripTransportDTO = new MyTripTransportDTO(
                        flight.getFlightName(),
                        trip.getTripType(),
                        flight.getFromPlace(),
                        flight.getToPlace(),
                        flight.getPickUpDate(),
                        flight.getPickUpTime(),
                        flight.getDropDate(),
                        flight.getDropTime(),
                        flight.getPrice(),
                        null,
                        null,
                        null
                );
                for(Passenger passenger: passengers){
                    MyTripPassengerDTO myTripPassengerDTO = new MyTripPassengerDTO(
                            passenger.getPassengerId(),
                            passenger.getPassengerName(),
                            passenger.getPreference(),
                            passenger.getPassengerAge(),
                            passenger.getTripId(),
                            passenger.getSeatId(),
                            passenger.getUserId(),
                            passenger.getGender(),
                            passenger.getPreference().equals("BUSINESS_CLASS")
                                    ? flightBusinessSeatRepoService.findFlightBusinessSeatById(passenger.getSeatId()).getSeatNo()
                                    : flightEconomySeatRepoService.findFlightEconomySeatById(passenger.getSeatId()).getSeatNo()
                    );
                    passengerList.add(myTripPassengerDTO);
                }
            }


            MyTripResponseDTO completedTrip = new MyTripResponseDTO(
                    trip.getTripId(),
                    trip.getFromPlace(),
                    trip.getPickUpDate(),
                    trip.getPickUpTime(),
                    trip.getToPlace(),
                    trip.getDropDate(),
                    trip.getDropTime(),
                    passengerList,
                    contactDetails,
                    myTripTransportDTO,
                    trip.getBookedDate(),
                    trip.getBookedTime()
                    );
            completedTripList.add(completedTrip);
        }
        return new ResponseEntity<>(completedTripList, HttpStatus.OK);
    }
}
