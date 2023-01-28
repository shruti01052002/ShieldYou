let video;
let poseNet;
let pose;
let skeleton;
let correct = false;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    alert('Model loaded and pose being processed');
}

function draw() {
    image(video, 0, 0);
    if (pose) {
        let eyeR = pose.rightEye;
        let eyeL = pose.leftEye;
        let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

        fill(0, 0, 255);
        ellipse(pose.leftWrist.x, pose.leftWrist.y, d);
        ellipse(pose.rightWrist.x, pose.rightWrist.y, d);

        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0, 255, 0);
            ellipse(x, y, 16, 16);

            // condition for checking the pose
            if (abs(pose.leftWrist.x - pose.rightWrist.x) < 20
                && abs(pose.leftWrist.x - pose.leftAnkle.x) < 10 &&
                abs(pose.rightWrist.x - pose.rightAnkle.x) < 10 &&
                abs(pose.leftKnee.x - pose.rightKnee.x) < 10 &&
                abs(pose.leftWrist.x - pose.rightWrist.x) < 10) {
                correct = true;
                if (correct === true) {
                    var msg = new SpeechSynthesisUtterance('You are doing a great job!');
                    msg.rate = 1;
                    window.speechSynthesis.speak(msg);
                    break;
                }
            }
        }

        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(2);
            stroke(255);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }

    if (correct == true) {
        if (confirm("CORRECT! 👏👏👏 Wanna try again?")) {
            window.open("page-3.html", "All the best 👍");
        }
        else {
            window.close("page-3.html", "Closing");
        }
        correct = false;
    }
}

