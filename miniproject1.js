function setup() {
  createCanvas(630, 350);
}

function draw() {
  background(320);
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(0, 0, 300, 350);
  
  fill('#f2d857'); ///yellow
  circle(150, 175, 150)
  



  
  //Big first rect
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(300, 0, 330, 50);
  stroke('#ffffff'); //dark Grey
  strokeWeight(3);
  
  fill('#f2d857'); ///yellow
  circle(325, 25, 30);
  
  fill('#35bcf2'); ///blue
  circle(365, 25, 30);
  fill('#f2d857'); ///yellow
  circle(405, 25, 30);
  
  circle(405, 25, 30);
  circle(445, 25, 30);
  circle(485, 25, 30);
  circle(525, 25, 30);
  circle(565, 25, 30);
  circle(605, 25, 30);
  
  
  //1 small dark rect
  noStroke();
  fill('#d1d0c6'); //light Grey
  rect(300, 50, 325, 25);
  
  //1 Big Second rect
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(300, 75, 325, 75);
  
  //2 small dark rect
  noStroke();
  fill('#d1d0c6'); //light Grey
  rect(300, 150, 325, 25);
  
  //2 Big Second rect
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(300, 175, 325, 75);
  
  //3 small dark rect
  noStroke();
  fill('#d1d0c6'); //light Grey
  rect(300, 250, 325, 25);
  
  //3 Big Second rect
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(300, 275, 325, 75);
  
  //Middle line
  stroke('#d1d0c6'); //dark Grey
  strokeWeight(2);
  line(300, 0, 300, 350); //vertical
  
  
  fill('#000000');
  ellipse(156, 46, 25, 25);
  ellipse(186, 46, 25, 25);
  stroke('#18293f')
  line(156, 45, 186, 45);
  
  noStroke();
  textSize(12);
  fill('#000000');
  text('EYES', 310, 65);
  text('MOUTH', 310, 167);        text('ACCESARIES', 310, 267);
function mousePressed() {
  if(325 <= mouseX <=350 && 0 <= mouseY <= 25) {
  fill('#35bcf2'); ///blue
  circle(150, 175, 150);
  
  fill('#000000');
  ellipse(156, 46, 55, 55);
  ellipse(156, 46, 55, 55);  
  }  
  }

  
}
