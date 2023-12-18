package com.example.ectravelwebapplication.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {

    private Integer userId;

    private String emailId;

    private boolean loginStatus;
}
