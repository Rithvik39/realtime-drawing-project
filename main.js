noseX = "";
noseY = "";
leftWristX = "";
rightWristX = "";
difference = "";


function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(600 , 600);
    video.size(600 , 600);
    canvas.position(680 , 160);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);

}

function draw(){
    background("#a199a3");
    document.getElementById("font_size").innerHTML = "the size of the font = " + difference + "px";
    textSize(difference)
    fill("#ff3300");
    text("Rithvik" , 50 , 400)

    
}

function modelLoaded(){
    console.log("model is loaded !!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " and noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("right wrist x = " + rightWristX + "left wrist x = " + leftWristX + "difference = " + difference);
    }
}