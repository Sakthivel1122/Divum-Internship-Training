package com.example.divumcrudapplication.servicetest;

import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.entity.User;
import com.example.divumcrudapplication.repo.UserRepo;
import com.example.divumcrudapplication.service.UserService;
import com.example.divumcrudapplication.service.UserServiceIMPL;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
public class ServiceTest {
    @InjectMocks
    private UserServiceIMPL userServiceIMPL;

    @Mock
    private UserRepo userRepo;

    @Before
    public  void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void checkAddUser(){
        UserAddDTO user = new UserAddDTO();
        String response = userServiceIMPL.addUser(user);
        Assert.assertEquals("Added Successfully",response);
    }

    @Test
    public void checkGetAllUser(){
        List<UserDTO> DTOList = new ArrayList<>();
        List<User> list = new ArrayList<>();
        when(userRepo.findAll()).thenReturn(list);
        ResponseEntity<List<UserDTO>> response = userServiceIMPL.getAllUser();
        Assert.assertEquals(HttpStatus.OK,response.getStatusCode());
    }
}
