package com.example.divumcrudapplication.servicetest;

import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.DTO.UserUpdateDTO;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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

    @Test
    public void checkUpdateUser(){
        UserUpdateDTO userUpdateDTO = new UserUpdateDTO();
        List<UserDTO> DTOList = new ArrayList<>();
        User user = new User();
        when(userRepo.getById(0)).thenReturn(user);
        String response = userServiceIMPL.updateUser(userUpdateDTO);
        Assert.assertEquals("Updated",response);
    }

    @Test
    public void checkDeleteUser(){
        when(userRepo.existsById(0)).thenReturn(true);
        String response = userServiceIMPL.deleteUser(0);
        Assert.assertEquals("Deleted",response);
    }

    @Test
    public void checkGetUserWithPaginationAndSorting(){
        Page<User> users = null;
        when(userRepo.findAll(PageRequest.of(0, 10).withSort(Sort.by(Sort.Direction.DESC,"lastUpdate")))).thenReturn(users);
        ResponseEntity<Page<User>> response = userServiceIMPL.getUserWithPaginationAndSorting(0,10);
        Assert.assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    public void checkCheckEmail(){
        when(userRepo.findByEmailId("")).thenReturn(null);
        boolean response = userServiceIMPL.checkEmailId("");
        Assert.assertTrue(response);
    }
}
