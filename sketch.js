var col = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  col = map ( mouseX, 0 , 400, 237, 100, 200);
  background(col);
  
  //ear left
  noStroke();
  fill(138, 90, 68);
  triangle(160, 260, 200, 240, 100, 175);
  fill(255, 209, 102);
  triangle(90, 160, 200, 240, 100, 175);
  
  //ear right
  fill(255, 209, 102);
   triangle(310, 280, 300, 230, 380, 185);
  fill(138, 90, 68);
   triangle(380,185,300,240,310,280);
  
  //head
  fill(255, 209, 102);
  noStroke();
rect(150, 220, 170, 200, 60, 50, 20, 80);
  //eyes
  fill(138, 90, 68);
  if (mouseX > 200){
   rect(180, 275, 25, 30, 10);
  }
    else {ellipse (190, 290, 35, 40, 10);
        }
  if(mouseX > 200){
  rect(245, 275, 25, 30, 10);}
  else{ellipse(255, 290, 35, 40, 10);}
  fill(255);
  ellipse(190,290,15);
  ellipse(255,290,15);
  //nose
  fill(138, 90, 68);
  ellipse(220,320,15,10)
  //mouse
  fill(244, 151, 142);
  stroke(176, 125, 98);
  if(mouseX > 200){
     rect(210, 350, 35, 10, 10, 20, 5, 15);
  }
  else{rect(210, 340, 35, 30, 10, 20, 5, 15);}
  //
  fill(240, 128, 128);
  noStroke();
  ellipse(170,320,20);
  ellipse(280,320,20);
  
}
