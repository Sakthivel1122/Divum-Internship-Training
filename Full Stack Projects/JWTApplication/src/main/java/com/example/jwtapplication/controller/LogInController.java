package com.example.jwtapplication.controller;


import com.example.jwtapplication.DTO.SignUpRequestDTO;
import com.example.jwtapplication.DTO.SignUpUpdateDTO;
import com.example.jwtapplication.service.LogInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LogInController {

    @Autowired
    private LogInService logInService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignUpRequestDTO signUpRequestDTO){
        return logInService.signUp(signUpRequestDTO);
    }

    @PutMapping("/update")
    public String update(@RequestBody SignUpUpdateDTO signUpUpdateDTO){
        return logInService.update(signUpUpdateDTO);
    }
}
