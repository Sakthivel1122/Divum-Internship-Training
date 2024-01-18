import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import "./TakeSamplePhoto.scss";
import TimerClock from "../../components/TimerClock";
import { useNavigate } from "react-router-dom";
import { useMain } from "../../context/MainContext";

const loadModels = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
  await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
  await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
  await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
  await faceapi.nets.faceExpressionNet.loadFromUri("/models");
};

const TakeSamplePhoto = () => {
  const mainContext = useMain();
  const [idImageSrc, setIdImageSrc] = useState(null);
  const webcamRef = useRef(null);
  const [duration, setDuration] = useState();

  const navigate = useNavigate();
  const handleTakeIdPhoto = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    try {
      checkForFace(imgSrc).then((res) => {
        console.log("res", res);
        if (res) {
          setIdImageSrc(imgSrc);
        } else {
          alert("No face detected");
        }
      });
    } catch (error) {
      console.log("ERROR WHILE TAKING PHOTO");
    }
  };

  const checkForFace = async (imgSrc) => {
    const img = await faceapi.fetchImage(imgSrc);
    const facedetection = await faceapi
      .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();
    return facedetection !== undefined;
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setDuration(value);
  };

  const handleStartTest = () => {
    if (idImageSrc) {
      if (duration) {
        const data = { duration: duration, idImageSrc: idImageSrc };
        navigate("/startTest", {
          state: data,
        });
      } else {
        alert("Please enter the test duration !!!");
      }
    } else {
      alert("Please take a sample photo !!!");
    }
  };
  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="TakeSamplePhoto">
      <h1>Test Details</h1>
      <div className="input-box-wrapper">
        <label className="label" htmlFor="duraion">
          Enter test duration
        </label>
        <input
          type="number"
          className="input-box"
          placeholder="Type here..."
          name="duraion"
          value={duration}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <button className="start-test-btn" onClick={handleStartTest}>
        Start Test
      </button>
      <h1>Take sample photo</h1>
      <Webcam className={"live-img "} ref={webcamRef} />
      <button className="take-photo-btn" onClick={handleTakeIdPhoto}>
        Take Photo
      </button>
      {idImageSrc && (
        <img
          className="sample-img"
          src={idImageSrc}
          ref={mainContext.idImgRef}
          alt="Captured Image"
        />
      )}
    </div>
  );
};

export default TakeSamplePhoto;
