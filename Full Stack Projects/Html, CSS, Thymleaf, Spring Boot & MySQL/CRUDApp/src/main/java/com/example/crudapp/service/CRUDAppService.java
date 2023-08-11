package com.example.crudapp.service;

import com.example.crudapp.domain.Student;
import com.example.crudapp.repo.CRUDAppRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CRUDAppService {

    @Autowired
    private CRUDAppRepo repo;

    public List<Student> listAll(){
        return repo.findAll();
    }

    public void save(Student std){
        repo.save(std);
    }

    public Student get(Long id){
        return repo.findById(id).get();
    }

    public void delete(Long id){
        repo.deleteById(id);
    }
}
