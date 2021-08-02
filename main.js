MousX = 0;
MousY = 0;
MImage = ""
function preload() {
    MImage = loadImage("Moustache.jpg")
}

function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    Video = createCapture(VIDEO)
    Video.hide()
    PoseNet = ml5.poseNet(Video, Model_Loaded)
    PoseNet.on('pose', GotPoses)
}

function draw() {
    image(Video, 0, 0, 400, 400)
    image(MImage, MousX, MousY, 40, 40)
}

function Take_Snapshot() {
    save("Moustashe.png")
}


function Model_Loaded() {
    console.log("model is loaded");
}

function GotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        MousX = results[0].pose.nose.x - 180
        MousY = results[0].pose.nose.y - 68
    }
}