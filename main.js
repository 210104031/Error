L_wrist_x = 0;
R_wrist_x = 0;
nose_x = 0;
nose_y = 0;
diffrence = 50;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(500,480);
    canvas.position(750,180);
    video.position(50,180);
    background("white");
    posenet = ml5.poseNet(video, modelReady);
    posenet.on('pose',gotresult);
}

function draw(){

    fill("blue");
    stroke("darkblue")
    // rect(nose_x, nose_y,diffrence,diffrence);
    square(nose_x,nose_y,diffrence);
}

function modelReady(){
    console.log("WORKING FINE OR NOT")
}

function gotresult(error,results) {
    if(error){
        console.log(error);
    }

    else {
        console.log(results);
        L_wrist_x = results[0].pose.leftWrist.x;
        R_wrist_x = results[0].pose.rightWrist.x;
        diffrence = Math.floor(L_wrist_x - R_wrist_x);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        document.getElementById("length").innerHTML = diffrence;
    }
}