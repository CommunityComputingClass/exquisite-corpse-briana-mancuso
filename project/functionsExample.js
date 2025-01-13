function setup() {
    createCanvas(600, 600);
   background("pink")
   face(200,200)
} 
 
 function draw() {
 }
 
 function eyes(x,y) {
   //left eye
    strokeWeight(5)
     fill("white")
    ellipse(x, y, 80, 50);
     fill("black")
     ellipse(x-5,y,30,30)
    fill("white")
    angleMode(DEGREES)
    noFill()
    arc(x,y,80,90,180,360);
   
   //right eye
     fill("white")
    ellipse(x+200, y, 80, 50);
     fill("black")
     ellipse(x+195,y,30,30)
    fill("white")
    angleMode(DEGREES)
    noFill()
    arc(x+200,y,80,90,180,360);
 }
 function mouth(x,y) {
    angleMode(DEGREES)
    strokeWeight(4)
    line (x-30,y,x+30,y);
    noFill()
    arc(x+15,y,30,40,180,360)
    arc(x-15,y,30,40,180,360)
    arc(x,y,60,40,0,180)
    fill(200,0,0)
    arc(x+15,y-2,30,40,180,360)
    arc(x-15,y-2,30,40,180,360)
    arc(x,y+2,60,40,0,180)
 }
 function nose(x,y){
    strokeWeight(5)
    line(x-10,y,x+10,y)
    line(x-10,y,x,y-40)
 }
 function face(x,y){
  eyes(x,y)
  nose(x+100,y+100)
  mouth(x+100,y+200)
 }