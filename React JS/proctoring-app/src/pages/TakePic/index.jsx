import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import "./TakePic.scss";

const TakePic = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [idImageSrc, setIdImageSrc] = useState(null);
  const idImgRef = useRef(null);
  const currentImgRef = useRef(null);
  const [warning, setWarning] = useState(null);

  const handleTakePhoto = async () => {
    let faceCount;
    console.log("Entered 1", idImgRef);
    setImageSrc(webcamRef.current.getScreenshot());
    if (idImgRef.current && currentImgRef.current) {
      console.log("Entered 2");

      const idCardFacedetection = await faceapi
        .detectSingleFace(
          idImgRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      const selfieFacedetection = await faceapi
        .detectSingleFace(
          currentImgRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      detectFaceTruning(currentImgRef.current); // detectFaceTruning ------------

      if (currentImgRef.current) {
        const detections = await faceapi.detectAllFaces(currentImgRef.current);
        faceCount = detections.length;
        console.log("faceCount", faceCount);
      }
      console.log(idCardFacedetection, selfieFacedetection);
      if (idCardFacedetection && selfieFacedetection) {
        // Using Euclidean distance to comapare face descriptions
        const distance = faceapi.euclideanDistance(
          idCardFacedetection.descriptor,
          selfieFacedetection.descriptor
        );
        setWarning(distance >= 0.4 || faceCount > 1);
        console.log(distance);
      }
    }
  };
  const handleTakeIdPhoto = () => {
    setIdImageSrc(webcamRef.current.getScreenshot());
  };

  const webcamRef = useRef(null);
  useEffect(() => {
    const intervalId = setInterval(handleTakePhoto, 1000); // Every 1 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    })();
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
    // console.log("CHECK")
    // console.log("OBJ",positions)
    // console.log(index,key);
    // console.log("VAL",positions[index][key]);
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

        // console.log("poseAngles",poseAngles);
        console.log("poseAngles >>", poseAngles);

        // Use poseAngles.pitch, poseAngles.yaw, poseAngles.roll to determine face turning

        // Pitch: Upward/downward tilt of the head (positive for looking up, negative for looking down).
        // Yaw: Left/right rotation of the head (positive for turning right, negative for turning left).
        // Roll: Tilting of the head to the side (positive for tilting right, negative for tilting left).
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // Example: Calculate head pose angle (pitch, yaw, roll)

  return (
    <div>
      <Webcam
        className={
          "live-img " +
          (warning !== null && (warning ? "red-border" : "green-border"))
        }
        ref={webcamRef}
      />
      <button onClick={handleTakeIdPhoto}>Take Photo</button>
      {imageSrc && (
        <img
          className="updating-img"
          src={imageSrc}
          ref={currentImgRef}
          alt="Captured Image"
        />
      )}
      {idImageSrc && <h2>ID Pic</h2>}
      {idImageSrc && (
        <img src={idImageSrc} ref={idImgRef} alt="Captured ID Image" />
      )}
    </div>
  );
};

export default TakePic;
