package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.Train;
import com.example.ectravelwebapplication.entity.TrainSeat;
import com.example.ectravelwebapplication.entity.TrainSeatTypePrice;
import com.example.ectravelwebapplication.entity.TrainStation;
import com.example.ectravelwebapplication.repository.TrainSeatTypePriceRepo;
import com.example.ectravelwebapplication.repository.TrainStationRepo;
import com.example.ectravelwebapplication.repository.service.*;
import com.example.ectravelwebapplication.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    TrainStationRepo trainStationRepo; //

    @Autowired
    TrainSeatTypePriceRepo trainSeatTypePriceRepo;

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
        List<Train> trains =  trainRepoService.findAll();
        List<GetAllTrainResponseDTO> allTrainList = getAllTrainResult(trains);
        return new ResponseEntity<>(allTrainList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<GetAllTrainResponseDTO>> getAvailTrain(GetAvailTrainRequestDTO getAvailTrainRequestDTO){
        List<Train> trains =  trainRepoService.findAllByFromPlaceAndToPlaceAndPickUpDate(
                getAvailTrainRequestDTO.getFromPlace(),
                getAvailTrainRequestDTO.getToPlace(),
                getAvailTrainRequestDTO.getPickUpDate()
        );
        List<GetAllTrainResponseDTO> allAvailTrainList = getAllTrainResult(trains);
        return new ResponseEntity<>(allAvailTrainList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteTrain(int trainId) {
        trainStationRepo.deleteByTrainId(trainId);
        trainSeatRepoService.deleteByTrainDetails_TrainId(trainId);
        trainSeatTypePriceRepo.deleteAllByTrainDetails_TrainId(trainId);
        trainRepoService.deleteById(trainId);
        return new ResponseEntity<>("Train Deleted Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updateTrain(UpdateTrainDTO updateTrainDTO){
//        deleteTrain(updateTrainDTO.getTrainId());
//        addTrain(updateTrainDTO.getTrainData());
        return new ResponseEntity<>("Train Updated Successfully",HttpStatus.OK);
    }

    public List<GetAllTrainResponseDTO> getAllTrainResult(List<Train> trains){
        List<GetAllTrainResponseDTO> allTrainList = new ArrayList<>();
        for (Train train : trains) {
            List<TrainSeatDetailsDTO> trainSeatDetailsDTOList = new ArrayList<>();
            List<TrainSeat> trainSeatList;
            TrainSeatDetailsDTO trainSeatDetailsDTO;

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),1,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO(
                    "1A",
                    trainSeatList.size(),
                    !trainSeatList.isEmpty() ?
                            trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice()
                            :
                            trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),1).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),2,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO("2A",trainSeatList.size(), !trainSeatList.isEmpty() ? trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice() : trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),2).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),3,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO("3A",trainSeatList.size(), !trainSeatList.isEmpty() ? trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice() : trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),3).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),4,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO("SL",trainSeatList.size(), !trainSeatList.isEmpty() ? trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice() : trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),4).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),5,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO("2S",trainSeatList.size(), !trainSeatList.isEmpty() ? trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice(): trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),5).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            trainSeatList = trainSeatRepoService.findAllByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(train.getTrainId(),6,false);
            trainSeatDetailsDTO = new TrainSeatDetailsDTO("CC",trainSeatList.size(), !trainSeatList.isEmpty() ? trainSeatList.get(0).getTrainSeatTypePriceDetails().getPrice(): trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeId(train.getTrainId(),6).get(0).getTrainSeatTypePriceDetails().getPrice());
            trainSeatDetailsDTOList.add(trainSeatDetailsDTO);

            List<TrainStation> trainStationList = trainStationRepoService.findAllByTrainId(train.getTrainId());
            GetAllTrainResponseDTO getAllTrainResponseDTO = new GetAllTrainResponseDTO(train, trainSeatDetailsDTOList,trainStationList);
            allTrainList.add(getAllTrainResponseDTO);
        }
        return allTrainList;
    }
}
