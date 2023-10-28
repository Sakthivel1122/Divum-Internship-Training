package com.example.ectravelwebapplication.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainSeatDetailsDTO {
    private String seatName;

    private int availCount;

    private String price;
}
