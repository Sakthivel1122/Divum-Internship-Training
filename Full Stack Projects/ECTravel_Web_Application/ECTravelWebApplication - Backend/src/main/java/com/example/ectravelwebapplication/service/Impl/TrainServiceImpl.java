package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.*;
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

    @Autowired
    TripRepoService tripRepoService;

    @Autowired
    PassengerRepoService passengerRepoService;

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
        int seatNo = 1;
        for (int i = 0; i < 6; i++) {
            TrainSeatTypePrice trainSeatTypePrice = new TrainSeatTypePrice(
                    train,
                    trainSeatTypeRepoService.findById(i+1),
                    addTrainDTO.getPrices().get(i)
            );
            trainSeatTypePriceRepoService.saveTrainSeatTypePrice(trainSeatTypePrice);
            for (int j = 0; j < 10; j++) {
                TrainSeat trainSeat = new TrainSeat(train, null,trainSeatTypePrice,false,seatNo);
                seatNo++;
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
        Train train = trainRepoService.findTrainById(updateTrainDTO.getTrainId());
        train.setTrainName(updateTrainDTO.getTrainData().getTrainName());
        train.setFromPlace(updateTrainDTO.getTrainData().getFromPlace());
        train.setToPlace(updateTrainDTO.getTrainData().getToPlace());
        train.setRating(updateTrainDTO.getTrainData().getRating());
        train.setPickUpDate(updateTrainDTO.getTrainData().getPickUpDate());
        train.setPickUpTime(updateTrainDTO.getTrainData().getPickUpTime());
        train.setDropDate(updateTrainDTO.getTrainData().getDropDate());
        train.setDropTime(updateTrainDTO.getTrainData().getDropTime());
        trainRepoService.saveTrain(train);
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

    @Override
    public ResponseEntity<String> trainPayment(TrainPaymentDTO trainPaymentDTO){
        if(!trainPaymentDTO.isPaymentStatus()){
            return new ResponseEntity<>("Payment Failed",HttpStatus.BAD_REQUEST);
        }
        Trip trip = new Trip(
                trainPaymentDTO.getTripDetails().getTripType(),
                trainPaymentDTO.getTripDetails().getFromPlace(),
                trainPaymentDTO.getTripDetails().getToPlace(),
                trainPaymentDTO.getTripDetails().getPickUpDate(),
                trainPaymentDTO.getTripDetails().getPickUpTime(),
                trainPaymentDTO.getTripDetails().getDropDate(),
                trainPaymentDTO.getTripDetails().getDropTime(),
                trainPaymentDTO.getTripDetails().getTripPrice(),
                trainPaymentDTO.isPaymentStatus(),
                trainPaymentDTO.getRazorpayPaymentId(),
                trainPaymentDTO.getUserId(),
                trainPaymentDTO.getContactDetails().getEmailId(),
                trainPaymentDTO.getContactDetails().getMobileNo(),
                trainPaymentDTO.getTrainId(),
                trainPaymentDTO.getBookedDate(),
                trainPaymentDTO.getBookedTime()
        );
        tripRepoService.saveTrip(trip);
        int trainSeatTypeId;
        switch (trainPaymentDTO.getSeatType()) {
            case "1A":
                trainSeatTypeId = 1;
                break;
            case "2A":
                trainSeatTypeId = 2;
                break;
            case "3A":
                trainSeatTypeId = 3;
                break;
            case "SL":
                trainSeatTypeId = 4;
                break;
            case "2S":
                trainSeatTypeId = 5;
                break;
            case "CC":
                trainSeatTypeId = 6;
                break;
            default:
                return new ResponseEntity<String>("Invalid Train Seat Type",HttpStatus.BAD_REQUEST);
        }
        for (TrainPassengerDTO passengerDetails : trainPaymentDTO.getPassengerList()){
            List<TrainSeat> trainSeatList = trainSeatRepoService.findByTrainDetails_TrainIdAndTrainSeatTypePriceDetails_SeatTypeDetails_SeatTypeIdAndStatus(trainPaymentDTO.getTrainId(), trainSeatTypeId,false);
            Passenger passenger = new Passenger(
                    passengerDetails.getTravellerName(),
//                    trainPaymentDTO.getContactDetails().getEmailId(),
//                    trainPaymentDTO.getContactDetails().getMobileNo(),
                    passengerDetails.getBerthPreference(),
                    passengerDetails.getAge(),
                    trip.getTripId(),
                    trainSeatList.get(0).getTrainSeatId(),
//                    trainPaymentDTO.getTrainId(),
                    trainPaymentDTO.getUserId(),
                    passengerDetails.getGender()
            );
            passengerRepoService.savePassenger(passenger);
            if(!trainSeatList.isEmpty()){
                TrainSeat trainSeat =  trainSeatRepoService.findTrainSeatById(trainSeatList.get(0).getTrainSeatId());
                trainSeat.setStatus(true);
                trainSeat.setPassengerDetails(passenger);
                trainSeatRepoService.saveTrainSeat(trainSeat);
            }
        }
        return new ResponseEntity<String>("Train Payment Successful",HttpStatus.OK);
    }
}
