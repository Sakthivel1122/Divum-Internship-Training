package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    String addUser(AddUserDTO addUserDTO);

    ResponseEntity<LoginResponseDTO> userAuthentication(LogInDTO logInDTO);

    UserDetailsDTO getUserDetails(String emailId);

    String updateUser(UpdateUserDTO updateUserDTO);

    ResponseEntity<String> busPayment(BusPaymentDTO busPaymentDTO);
}
