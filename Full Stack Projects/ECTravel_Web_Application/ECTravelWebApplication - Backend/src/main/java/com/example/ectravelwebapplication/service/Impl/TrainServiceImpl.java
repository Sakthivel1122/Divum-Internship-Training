package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.Train;
import com.example.ectravelwebapplication.entity.TrainSeat;
import com.example.ectravelwebapplication.entity.TrainSeatTypePrice;
import com.example.ectravelwebapplication.entity.TrainStation;
import com.example.ectravelwebapplication.repository.TrainSeatRepo;
import com.example.ectravelwebapplication.repository.TrainStationRepo;
import com.example.ectravelwebapplication.repository.service.*;
import com.example.ectravelwebapplication.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrainServiceImpl implements TrainService {

    @Autowired
    TrainSeatTypeRepoService trainSeatTypeRepoService;

    @Autowired
    TrainRepoService trainRepoService;

    @Autowired
    TrainSeatTypePriceRepoService trainSeatTypePriceRepoService;

    @Autowired
    TrainSeatRepoService trainSeatRepoService;

    @Autowired
    TrainStationRepoService trainStationRepoService;

    @Autowired
    TrainStationRepo trainStationRepo;
    @Override
    public ResponseEntity<String> addTrain(AddTrainDTO addTrainDTO){
        Train train = new Train(
                addTrainDTO.getTrainName(),
                addTrainDTO.getFromPlace(),
                addTrainDTO.getToPlace(),
                addTrainDTO.getRating(),
                addTrainDTO.getPickUpDate(),
                addTrainDTO.getPickUpTime(),
                addTrainDTO.getDropDate(),
                addTrainDTO.getDropTime()
        );
        trainRepoService.saveTrain(train);
        for (int i = 0; i < addTrainDTO.getTrainStationList().size(); i++) {
            TrainStationDTO trainStationDTO = addTrainDTO.getTrainStationList().get(i);
            TrainStation trainStation = new TrainStation(
                    train.getTrainId(),
                    trainStationDTO.getStationName(),
                    trainStationDTO.getStationTime()
            );
            trainStationRepoService.saveTrainStation(trainStation);
        }
        for (int i = 0; i < 6; i++) {
            TrainSeatTypePrice trainSeatTypePrice = new TrainSeatTypePrice(
                    train,
                    trainSeatTypeRepoService.findById(i+1),
                    addTrainDTO.getPrices().get(i)
            );
            trainSeatTypePriceRepoService.saveTrainSeatTypePrice(trainSeatTypePrice);
            for (int j = 0; j < 10; j++) {
                TrainSeat trainSeat = new TrainSeat(train, null,trainSeatTypePrice,false);
                trainSeatRepoService.saveTrainSeat(trainSeat);
            }
        }
        return new ResponseEntity<>("Train Added Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<GetAllTrainResponseDTO>> getAllTrain(){
        List<GetAllTrainResponseDTO> allTrainList = new ArrayList<>();
        List<Train> trains =  trainRepoService.findAll();
        for (int i = 0; i < trains.size(); i++) {
            Train train = trains.get(i);
            TrainSeatDTO trainSeatDTO = new TrainSeatDTO();
            trainSeatDTO.setOneACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),1,false).size());
            trainSeatDTO.setTwoACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),2,false).size());
            trainSeatDTO.setThreeACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),3,false).size());
            trainSeatDTO.setSleeperCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),4,false).size());
            trainSeatDTO.setSecondSeaterCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),5,false).size());
            trainSeatDTO.setChairCarCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),6,false).size());

//            List<TrainSeat>  trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainId(train.getTrainId());
//            List<TrainStation> trainStationList = trainStationRepoService.findAllByTrainId(1);
            List<TrainStation> trainStationList2 = trainStationRepoService.findAllByTrainId(train.getTrainId());
            System.out.println(train.getTrainId() + " >> " + trainStationRepoService.findAllByTrainId(train.getTrainId()));
            GetAllTrainResponseDTO getAllTrainResponseDTO = new GetAllTrainResponseDTO(train, trainSeatDTO,trainStationList2);
            allTrainList.add(getAllTrainResponseDTO);
        }
        return new ResponseEntity<>(allTrainList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<GetAllTrainResponseDTO>> getAvailTrain(GetAvailTrainRequestDTO getAvailTrainRequestDTO){
        List<GetAllTrainResponseDTO> allAvailTrainList = new ArrayList<>();
        List<Train> trains =  trainRepoService.findAllByFromPlaceAndToPlaceAndPickUpDate(
                getAvailTrainRequestDTO.getFromPlace(),
                getAvailTrainRequestDTO.getToPlace(),
                getAvailTrainRequestDTO.getPickUpDate()
        );
        for (int i = 0; i < trains.size(); i++) {
            Train train = trains.get(i);
            TrainSeatDTO trainSeatDTO = new TrainSeatDTO();
            trainSeatDTO.setOneACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),1,false).size());
            trainSeatDTO.setTwoACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),2,false).size());
            trainSeatDTO.setThreeACount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),3,false).size());
            trainSeatDTO.setSleeperCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),4,false).size());
            trainSeatDTO.setSecondSeaterCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),5,false).size());
            trainSeatDTO.setChairCarCount(trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),6,false).size());

//            List<TrainSeat>  trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainId(train.getTrainId());
            List<TrainStation> trainStationList = trainStationRepoService.findAllByTrainId(train.getTrainId());

            GetAllTrainResponseDTO getAllTrainResponseDTO = new GetAllTrainResponseDTO(train, trainSeatDTO,trainStationList );
            allAvailTrainList.add(getAllTrainResponseDTO);
        }
        return new ResponseEntity<>(allAvailTrainList, HttpStatus.OK);
    }
}
