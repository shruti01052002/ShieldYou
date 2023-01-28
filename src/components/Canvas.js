import React from "react";
import * as posenet from '@tensorflow-models/posenet';
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";
import { abs } from "@tensorflow/tfjs";

let pose;
let correct=false;

export default function Canvas() {
    const webcamRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    const detectWebcamFeed = async (model) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;
            pose = await model.estimateSinglePose(video);
            drawResult(pose, video, videoWidth, videoHeight, canvasRef);
            isCorrectMove(pose)
        }
    };

    let eyeR;
    let eyeL;
    let earR;
    let earL;
    let wristR;
    let wristL;
    let shoulderR;
    let shoulderL;
    let elbowR;
    let elbowL;
    function isCorrectMove(pose) {
        if (pose) {
            eyeR = pose.rightEye;
            eyeL = pose.leftEye;
            earR = pose.rightEar;
            earL = pose.leftEar;
            wristR = pose.rightWrist;
            wristL = pose.leftWrist;
            shoulderR = pose.rightShoulder;
            shoulderL = pose.leftShoulder;
            elbowR = pose.rightElbow;
            elbowL = pose.leftElbow;
        }
        // logic 1
    
        // logic 2
    
        // logic 3
    }
    const runPosenet = async () => {
        const model = await posenet.load({
            inputResolution: { width: 600, height: 420 },
            scale: 0.8,
        });
        setInterval(() => {
            detectWebcamFeed(model);
        }, 100);
    };
    runPosenet();
    const drawResult = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;
        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    };
    // if(correct==true) {}
    //     else{}
    return (
        <div className="canvas">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: 100,
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 600,
                        height: 420
                    }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: 100,
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 10009,
                        width: 600,
                        height: 420
                    }}
                />
            </header>
        </div>
    );
}


