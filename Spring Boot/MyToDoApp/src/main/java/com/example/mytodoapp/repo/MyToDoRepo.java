package com.example.mytodoapp.repo;

import com.example.mytodoapp.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyToDoRepo extends JpaRepository<ToDo, Long> {

}
