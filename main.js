nose_x = 0;
nose_y = 0;

function preload(){
    antliers = loadImage("https://i.postimg.cc/L4cBM2ys/360-F-543486543-X6-Bwj2-ZHl0-NICT7u121-Xd-GNQmrse0-Ab3-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-100;
        nose_y = results[0].pose.nose.y-330;
    }
}
function draw() {
    image(video, 0, 0, 500,500);
    image(antliers,nose_x,nose_y,250,220);
}
function take_snapshot(){
    save('Myfilterapp.png')
}