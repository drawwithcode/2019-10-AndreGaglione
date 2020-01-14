var toilet, tp, song, bg;

function preload(){
  toilet = loadModel("assets/Toilet1.obj", true); // If true, scale the model to a standardized size when loading (normalization)
  tp = loadModel("assets/urinal.obj", true);
  song = loadSound('assets/MusicToilet.mp3');
  bg = loadImage('assets/txtr.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES);

}

function draw() {
  background(0);
  image(bg, -width/2, -height/2, bg.width / 3, bg.height / 4);

  push()
  ortho();
  camera(mouseX - width/2, mouseY - height/2, 100, 0, 0, 0, 0, 1, 0);
  noStroke();
  normalMaterial(255);
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  rotateZ(180);
  rotateY(180);
  model(toilet);
  pop();
  /*push();
  translate(200,-200,-10);
  rotateY(90);
  model(tp);
  pop()*/
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    toilet = loadModel("assets/Toilet1.obj", true);
  } else {
    song.play();
    toilet = loadModel("assets/tp.obj", true);
  }
}
