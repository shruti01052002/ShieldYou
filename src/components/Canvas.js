import React from "react";
import * as posenet from '@tensorflow-models/posenet';
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

var correct = false;

// function checkMove(pose) {
//     if (pose) {
//         let eyeR = rightEye;
//         let eyeL = leftEye;
//         let earR = rightEar;
//         let earL = leftEar;
//         let wristR = rightWrist;
//         let wristL = leftWrist;
//         let shoulderR = rightShoulder;
//         let shoulderL = leftShoulder;
//         let elbowR = rightElbow;
//         let elbowL = leftElbow;
//     }
// }

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
            const pose = await model.estimateSinglePose(video);
            drawResult(pose, video, videoWidth, videoHeight, canvasRef);
            // checkMove(pose)
        }
    };
    const runPosenet = async () => {
        const model = await posenet.load({
            inputResolution: { width: 640, height: 480 },
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
    return (
        <div className="App">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480
                    }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 10009,
                        width: 640,
                        height: 480
                    }}
                />
            </header>
        </div>
    );
}


