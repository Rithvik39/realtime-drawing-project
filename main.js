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
    background("grey");
}

function modelLoaded(){
    console.log("model is loaded !!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}