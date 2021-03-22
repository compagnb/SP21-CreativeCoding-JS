// To Do list:
// Start/End Screens
// moving ball
// paddle
// score
// levels

// Global Variables
var vel = 2;
var score = 0;
var x = 200;
var y = -20;
var screen = 0;
var c = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  gamePlay();
  if(c<400){
    c+=1;
  }else{
    c=0;
  }
}

function startScreen(){
  background(100,150, 255);
  fill(255);
  textFont('Roboto');
  textAlign(CENTER);
  textSize(24);
  text("welcome to almost pong", width/2, height/2);
  textSize(14);
  text("click anywhere to start", width/2, height/2 + 30);  
}

function endScreen(){
  background(0);
  fill(255, 0, 0);
  textFont('Monaco');
  textAlign(CENTER);
  textSize(24);
  text("GAME OVER", width/2, height/2);
  fill(255);
  textSize(14);
  text("click anywhere to play again", width/2, height/2 + 30);   
}

function gamePlay(){
  background(mouseX/2, mouseY/2, c/2);
  fill(255);
  stroke("pink");
  strokeWeight(5);
  // strokeWeight(mouseX/4);
  textFont("Comic Sans MS");
  textSize(14);
  text("score: "+ score,20,20);
  noStroke();
  // stroke("pink");
  // strokeWeight(4);
  ellipse(x, y, 20, 20);
  // stroke("black");
  // strokeWeight(5);
  rect(mouseX, height-20, 50, 30);
  y+=vel;
  if (y>height){
    score = 0;
    vel = 0;
    endScreen();  
  }
  if (y>height-10 && x>mouseX-20 && mouseX+20){
    y=-20;
    vel+=.5;
    score+=1;
  }
  if(y==-20){
    x=random(20, width-20);
  }
}









