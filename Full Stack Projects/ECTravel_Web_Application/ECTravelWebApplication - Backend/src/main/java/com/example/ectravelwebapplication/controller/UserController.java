package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.api.UserApi;
import com.example.ectravelwebapplication.repository.service.TripRepoService;
import com.example.ectravelwebapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController implements UserApi {

    @Autowired
    UserService userService;

    @Autowired
    TripRepoService tripRepoService;

    @Override
    public String addUser(@RequestBody AddUserDTO addUserDTO){
        return userService.addUser(addUserDTO);
    }

    @Override
    public ResponseEntity<LoginResponseDTO> userAuthentication(@RequestBody LogInDTO logInDTO){
        return userService.userAuthentication(logInDTO);
    }

    @Override
    public UserDetailsDTO getUserDetails(@PathVariable("emailId") String emailId){
        return userService.getUserDetails(emailId);
    }

    @Override
    public String UpdateUser(@RequestBody UpdateUserDTO updateUserDTO){
        return userService.updateUser(updateUserDTO);
    }


    @Override
    public ResponseEntity<List<MyTripResponseDTO>> getMyTrips(@RequestBody MyTripDTO myTripDTO){
        return userService.getMyTrips(myTripDTO);
    }
}
