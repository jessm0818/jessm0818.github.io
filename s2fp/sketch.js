function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let hr = hour(24) % 12;
  let min = minute();
  let sec = second();

  if (hr < 12) {
    setGradient(color(111, 125, 166), color(228, 120, 148));
  } else {
    setGradient(color(228, 120, 148), color(111, 125, 166));
  }

  push();
  translate(width / 2, height / 2); 
  rotate(-90);
  
  let hrAngle = map(hr, 0, 12, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360);
  let sAngle = map(sec, 0, 60, 0, 360);

  for (let i = 0; i < 12; i++) {
    let angle = i * 30;
    fill(255, 204, 102);
    noStroke();
    push();
    rotate(angle);
    translate (0, 150);
    quad(0, -40, 15, 0, 0, 40, -15, 0);
    pop();
  }
 
  push();
  stroke(153, 102, 102); //hour hand red
  rotate(map(hr % 12, 0, 12, 0, 360));
  line(0, 0, 60, 0);
  pop();
  strokeWeight(2);
 
  push();
  stroke(0, 102, 204); //minute hand blue
  rotate(map(min, 0, 60, 0, 360));
  line(0, 0, 80, 0);
  pop();
  strokeWeight(1.5);

  push();
  stroke(102, 153, 102); //second hand green
  rotate(map(sec, 0, 60, 0, 360));
  line(0, 0, 100, 0);
  pop();
  strokeWeight(3);

  //clock middle
  fill(255);
  noStroke();
  ellipse(0, 0, 15, 15);
  pop();
  
  Calcifer(mouseX, mouseY);
}

function Calcifer(x, y) {
  fill(255, 100, 0);
  noStroke();
  ellipse(x, y, 20, 20); 
  fill(255, 100, 0);
  ellipse(x, y-10, 10, 10);
  fill(0);
  ellipse(x - 5, y - 3, 2, 2);
  ellipse(x + 5, y - 3, 2, 2); 
}

function setGradient(c1, c2) {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}