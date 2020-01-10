var ballY = 0
var speed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,ballY,100);
  if(ballY<200){
  	fill('white');
  }
  
  if(ballY>200){
    fill('red');
  }

if (ballY > height || ballY < 0) {
    speed = -speed
  }
  ballY += speed;
}
