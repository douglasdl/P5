var inc = 0.01;
var start = 0;
function setup() {
   createCanvas(400, 400); 
   
}

function draw() {
   background(51);
   stroke(255);
   noFill();
   beginShape();
   var xoff = start;
   for(var x = 0; x < width; x++) {
      //var y = random(height);
      //var y = noise(xoff) * height;
      var y = height/2 + sin(xoff) * height/2;
      stroke(255);
      //point(x, y);
      vertex(x, y);
      xoff += inc;
   }
   endShape();

   start += inc;

   //noLoop();
   
}