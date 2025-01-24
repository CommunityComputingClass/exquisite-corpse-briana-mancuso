function setup() {
    createCanvas(600, 600);
   background(3, 66, 247)
   face(200,250)
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

 function eyebrow(x,y){
   strokeWeight(5)
   noFill()
   arc(x,y-80,100,40,180,360)
   arc(x+200,y-80,100,40,180,360)
 }
 function head(x,y){
   angleMode(DEGREES)
   strokeWeight(5)
   fill("pink")
   rect(x-75,y+200,150) 
   arc(x+200,y,70,80,270,90)
   arc(x-200,y,70,80,90,270)
   ellipse(x,y,400,500)
 }
 function hair(x,y){ 
   angleMode(DEGREES)
   fill(0,0,0)
   arc(x,y,500,700,180,360)
}
 function bangs(x,y){
   fill(0,0,0)
   angleMode(DEGREES)
   arc(x,y,450,300,180,360)
 }
 function face(x,y){
  hair(x+100,y+110)
  head(x+100,y+40) 
  bangs(x+100,y-60)
  eyes(x,y)
  nose(x+100,y+100)
  mouth(x+100,y+200)
  eyebrow(x,y)
 }