package com.example.jwtapplication.service;

import com.example.jwtapplication.DTO.SignUpRequestDTO;
import com.example.jwtapplication.DTO.SignUpUpdateDTO;
import com.example.jwtapplication.model.User;
import com.example.jwtapplication.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LogInService {

    @Autowired
    UserRepo userRepo;
    public ResponseEntity<String> signUp(SignUpRequestDTO signUpRequestDTO){
        User user = new User(
                signUpRequestDTO.getName(),
                signUpRequestDTO.getPhoneNo(),
                signUpRequestDTO.getEmailId(),
                signUpRequestDTO.getPassword()
        );
        user.setActive(true);


        userRepo.save(user);
        return new ResponseEntity<>("Sign Up Success", HttpStatus.OK);
    }

    public String update(SignUpUpdateDTO signUpUpdateDTO){
        User user = userRepo.getById(signUpUpdateDTO.getUserId());
        user.setName(signUpUpdateDTO.getName());
        user.setPhoneNo(signUpUpdateDTO.getPhoneNo());
                signUpUpdateDTO.getPhoneNo(),
                signUpUpdateDTO.getEmailId(),
                signUpUpdateDTO.getPassword()
        userRepo.save(user);
        return "Updated";
    }
}
