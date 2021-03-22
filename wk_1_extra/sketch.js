function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y+=40){
    for (var x = 0; x <= width; x+=40){
      fill(mouseX/2, mouseY/2, 100, 200);
      ellipse(x, y, mouseX, mouseX);
    }
  }
}