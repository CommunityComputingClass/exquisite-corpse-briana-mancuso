 function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(252, 36, 3);
  angleMode(DEGREES)
  strokeWeight(10)
  //eyelid
  fill(255,255,255)
  ellipse (150,250,150,100);
  ellipse (350,250,150,100);
  //eyelash
  line(150,200,150,150);
  line(350,200,350,150);
  line(100,210,50,180);
  line(400,210,450,180);
  line(300,210,280,190);
  line(200,210,220,190);
  //pupil
  fill(0,0,0)
  ellipse(150,250,50,50);
  ellipse(350,250,50,50);
  
  fill(0, 0, 0)
  text("("+mouseX + ", " + mouseY+")", 5, 15);
}