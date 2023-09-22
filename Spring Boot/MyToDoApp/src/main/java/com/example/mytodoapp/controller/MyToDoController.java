    package com.example.mytodoapp.controller;

import com.example.mytodoapp.DTO.ToDoAddDTO;
import com.example.mytodoapp.model.ToDo;
import com.example.mytodoapp.repo.MyToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/todo")
public class MyToDoController {

    @Autowired
    MyToDoRepo repo;
    @GetMapping("/getToDoList")
    public List<ToDo> viewPage(){
            return repo.findAll();
    }

    @PostMapping("/addToDoItem")
    public ResponseEntity<String> addItem(@RequestBody ToDoAddDTO toDoAddDTO){
        ToDo todo = new ToDo(toDoAddDTO.getTitle(),toDoAddDTO.getDate(),toDoAddDTO.getStatus());
        if(todo != null){
            repo.save(todo);
            return new ResponseEntity<String>(HttpStatus.CREATED);
        }
        return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/updateStatus")
    public ResponseEntity<String> updateStatus(@RequestBody ToDo todo){
        if(repo.findById(todo.getId()).orElse(null) == null){
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
        repo.save(todo);
        return new ResponseEntity<String>(HttpStatus.OK);
    }
    @DeleteMapping("/deleteToDoItem/{id}")
    public ResponseEntity<String> deleteToDoItem(@PathVariable("id") Long id){
        if(repo.findById(id).orElse(null) == null)
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        repo.deleteById(id);
        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
