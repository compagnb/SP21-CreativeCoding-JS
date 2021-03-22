function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(150, 150, 150);
  var lineColor = color('magenta');
  var cPressedColor = color(0, 255, 0);
  var cColor = color(0, 200, 200);
  var recColor = color('yellow');
  if (mouseIsPressed){
    fill(cPressedColor);
  }else{
    fill(cColor);
  }
  noStroke()
  ellipse(mouseX, mouseY, 80, 80);
//   other shapes 
  // stroke(cColor);
  // fill(recColor);
  // rect(100, 200, 400, 400);

  stroke(0);
  point(200,200);
//   for loop
  for(var i = 0; i < 600; i += 10){
    stroke(lineColor);
    strokeWeight(i/100);
    rect( 10+i, 10+i, 20*i, 20*i);
    // line(i+10, 10, i+20, 30);
    // line(i-10, 30, i-20, 60);
  }
  
  // line(20, 10, 40, 30);
  
  
}