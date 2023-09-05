package com.example.divumcrudapplication.controller;

import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.entity.User;
import com.example.divumcrudapplication.repo.UserRepo;
import com.example.divumcrudapplication.service.UserService;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserControllerTest1 {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Mock
    private UserRepo userRepo;

    @Test
    public void checkGetAllUser() {
        ResponseEntity<List<UserDTO>> response = userController.getAllUser();
        Assert.assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    void getAllUser() {
    }
}