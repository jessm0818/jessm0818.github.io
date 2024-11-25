let colors = [];
let circleSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  
  colors = Array(10).fill().map(() => 
  color(random(0, 255), random(0, 255), random(0, 255)));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mouseMoved() {
  Ink();
}

function Ink() {
  for (let i = 0; i < random(1, 5); i++) {
    fill(random(colors));
    let size = random(10, circleSize);
    let x = mouseX + random(-50, 50);
    let y = mouseY + random(-50, 50);
    ellipse(x, y, size);
  }
}

function keyPressed() {
  if (key === 'ArrowUp') {
    circleSize += 10;
  } else if (key === 'ArrowDown') {
    circleSize = max(10, circleSize - 10);
  }
}