package com.example.divumcrudapplication.controllertest;

import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.DTO.UserUpdateDTO;
import com.example.divumcrudapplication.controller.UserController;
import com.example.divumcrudapplication.entity.User;
import com.example.divumcrudapplication.repo.UserRepo;
import com.example.divumcrudapplication.service.UserService;
import jakarta.inject.Inject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
public class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Mock
    private UserDTO userDTO;

    @Mock
    private UserRepo userRepo;

    @Before
    public  void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void checkGetAllUser(){
        List<UserDTO> users = null;
        when(userService.getAllUser()).thenReturn(new ResponseEntity<>(users,HttpStatus.OK));
        ResponseEntity<List<UserDTO>> response = userController.getAllUser();
        Assert.assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    public void checkGetUserWithPaginationAndSorting(){
        Page<User> users = null;
        when(userService.getUserWithPaginationAndSorting(0, 10)).thenReturn(new ResponseEntity<>(users,HttpStatus.OK));
        ResponseEntity<Page<User>>  response = userController.getUserWithPaginationAndSorting(0,10);
        Assert.assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    public void checkAddUser(){
        UserAddDTO user = null;
        when(userService.addUser(user)).thenReturn("Added Successfully");
        String response = userController.addUser(user);
        Assert.assertEquals("Added Successfully",response);
    }

    @Test
    public void checkDeleteUser(){
        when(userService.deleteUser(10)).thenReturn("Deleted");
        String response = userController.deleteUser(10);
        Assert.assertEquals("Deleted",response);
    }

    @Test
    public void checkUpdateUser(){
        UserUpdateDTO user = null;
        when(userService.updateUser(user)).thenReturn("Updated");
        String response = userController.updateUser(user);
        Assert.assertEquals("Updated",response);
    }
}
