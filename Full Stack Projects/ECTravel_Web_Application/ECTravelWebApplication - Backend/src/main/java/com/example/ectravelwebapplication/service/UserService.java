package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    String addUser(AddUserDTO addUserDTO);

    ResponseEntity<LoginResponseDTO> userAuthentication(LogInDTO logInDTO);

    UserDetailsDTO getUserDetails(String emailId);

    String updateUser(UpdateUserDTO updateUserDTO);

    ResponseEntity<List<MyTripResponseDTO>> getMyTrips(MyTripDTO myTripDTO);
}
