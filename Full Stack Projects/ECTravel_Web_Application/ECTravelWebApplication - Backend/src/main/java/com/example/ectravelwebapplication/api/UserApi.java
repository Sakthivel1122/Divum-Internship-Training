package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/user")
public interface UserApi {
    @PostMapping("/adduser")
    String addUser(@RequestBody AddUserDTO addUserDTO);

    @PostMapping("/userauthentication")
    ResponseEntity<LoginResponseDTO> userAuthentication(@RequestBody LogInDTO logInDTO);

    @GetMapping("getuserdetails/{emailId}")
    UserDetailsDTO getUserDetails(@PathVariable("emailId") String emailId);

    @PostMapping("updateUser")
    String UpdateUser(@RequestBody UpdateUserDTO updateUserDTO);

    @PostMapping("getMyTrips")
    ResponseEntity<List<MyTripResponseDTO>> getMyTrips(@RequestBody MyTripDTO myTripDTO);
}
