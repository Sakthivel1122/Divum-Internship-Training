import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import "./Proctor.scss";
import { useMain } from "../../context/MainContext";

const loadModels = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri("/models").then(async (res) => {
    await faceapi.nets.tinyFaceDetector
      .loadFromUri("/models")
      .then(async (res) => {
        await faceapi.nets.faceLandmark68Net
          .loadFromUri("/models")
          .then(async (res) => {
            await faceapi.nets.faceRecognitionNet
              .loadFromUri("/models")
              .then(async (res) => {
                return await faceapi.nets.faceExpressionNet.loadFromUri(
                  "/models"
                );
              });
          });
      });
  });
};

const Proctor = ({ idImageSrc }) => {
  const mainContext = useMain();
  const webcamRef = useRef(null);
  const currentImgRef = useRef(null);
  const [warning, setWarning] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleTakeFrequentPhoto = async () => {
    let idImg = await faceapi.fetchImage(idImageSrc);
    let faceCount = null;
    let distance = null;
    let currentImgSrc = webcamRef.current.getScreenshot();
    setImageSrc(currentImgSrc);
    console.log("Entered 1", currentImgRef);
    if (currentImgRef.current) {
      console.log("Entered 2");
      const idCardFacedetection = await faceapi
        .detectSingleFace(idImg, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

      const selfieFacedetection = await faceapi
        .detectSingleFace(
          currentImgRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();
      const poseAngles = detectFaceTruning(currentImgRef.current); // detectFaceTruning ------------
      console.log("poseAngles >>", poseAngles);
      console.log(
        "=>",
        idCardFacedetection !== undefined,
        selfieFacedetection !== undefined
      );
      if (currentImgRef.current) {
        const detections = await faceapi.detectAllFaces(currentImgRef.current);
        faceCount = detections.length;
        console.log("faceCount", faceCount);
      }
      // console.log(idCardFacedetection, selfieFacedetection);
      if (idCardFacedetection && selfieFacedetection) {
        distance = faceapi.euclideanDistance(
          idCardFacedetection.descriptor,
          selfieFacedetection.descriptor
        );
        console.log(distance);
      }
    }
    console.log(
      "WARNING STATUS",
      getWarningStatus(distance, faceCount),
      distance,
      faceCount
    );
    setWarning(getWarningStatus(distance, faceCount));
  };

  const getWarningStatus = (distance, faceCount) => {
    console.log("D F", distance, faceCount);
    if (distance === null) {
      return false;
    }
    if (distance >= 0.4) {
      return false;
    }
    if (faceCount > 1) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    let intervalId;
    loadModels().then((res) => {
      intervalId = setInterval(handleTakeFrequentPhoto, 1000); // Every 1 seconds
    });
    return () => clearInterval(intervalId);
  }, []);
  // ------------------- FACE TURNING DETECTION -----------------------

  const calculateAngle = (positions, point1, point2, point3) => {
    // const x1 = landmarks.getLandmark(point1).x;
    // const y1 = landmarks.getLandmark(point1).y;
    // const x2 = landmarks.getLandmark(point2).x;
    // const y2 = landmarks.getLandmark(point2).y;
    // const x3 = landmarks.getLandmark(point3).x;
    // const y3 = landmarks.getLandmark(point3).y;

    const x1 = getLandmark(positions, point1, "x");
    const y1 = getLandmark(positions, point1, "y");
    const x2 = getLandmark(positions, point2, "x");
    const y2 = getLandmark(positions, point2, "y");
    const x3 = getLandmark(positions, point3, "x");
    const y3 = getLandmark(positions, point3, "y");

    const angleRad =
      Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y1 - y2, x1 - x2);
    const angleDeg = (angleRad * 180) / Math.PI;

    return angleDeg;
  };
  const getLandmark = (positions, index, key) => {
    return positions[index][key];
  };
  const detectFaceTruning = async (image) => {
    const detections = await faceapi.detectAllFaces(image);
    const resizedDetections = faceapi.resizeResults(detections, image);
    const landmarks = await Promise.all(
      resizedDetections.map((detection) =>
        faceapi.detectFaceLandmarks(image, detection)
      )
    );
    // console.log("landmarks >", landmarks, landmarks.length);
    try {
      for (const landmark of landmarks) {
        // console.log("FULL OBJ", landmark.positions);
        // console.log("VAL =>", landmark.positions[27]);
        const poseAngles = {
          pitch: calculateAngle(landmark.positions, 27, 31, 35), // Nose tip, chin, upper lip
          yaw: calculateAngle(landmark.positions, 45, 36, 39), // Left eye, nose tip, right eye
          roll: calculateAngle(landmark.positions, 62, 27, 51), // Left eye outer, nose tip, right eye outer
        };
        return poseAngles;
        // Use poseAngles.pitch, poseAngles.yaw, poseAngles.roll to determine face turning

        // Pitch: Upward/downward tilt of the head (positive for looking up, negative for looking down).
        // Yaw: Left/right rotation of the head (positive for turning right, negative for turning left).
        // Roll: Tilting of the head to the side (positive for tilting right, negative for tilting left).
      }
    } catch (error) {
      console.log("ERROR", error);
      return false;
    }
  };
  return (
    <div className="Proctor">
      <Webcam
        className={
          "live-img " +
          (warning !== null && (!warning ? "red-border" : "green-border"))
        }
        ref={webcamRef}
      />
      {imageSrc && (
        <img
          className="updating-img"
          src={imageSrc}
          ref={currentImgRef}
          alt="Captured Image"
        />
      )}
    </div>
  );
};

export default Proctor;
