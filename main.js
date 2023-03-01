music1 = "";
music2 = "";
rightwrist_x=0;
leftwrist_x =0;
rightwrist_y=0;
leftwrist_y =0;


function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.posenet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        rightwrist_x = results[0].pose.rightWrist.x;
        rightwrist_y = results[0].pose.rightWrist.y;
        leftwrist_x = results[0].pose.leftWrist.x;
        leftwrist_y = results[0].pose.leftWrist.y;
    }
}

function modelLoaded(){
    console.log("Your model has initialised successfully!");
}

function draw(){
    image(video,0,0,500,400);
}