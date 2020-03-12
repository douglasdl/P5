var inc = 0.02;
var amplitude = 50;
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
      stroke(255);
      var n = map(noise(xoff), 0, 1, 0, height);
      var s = map(sin(xoff), -1, 1, -amplitude, amplitude);
      //var y = random(height);
      //var y = noise(xoff) * height;
      //var y = height/2 + sin(xoff) * height/2;
      var y = s + n;

      
      //point(x, y);
      vertex(x, y);
      xoff += inc;
   }
   endShape();

   start += inc;

   //noLoop();
   
}