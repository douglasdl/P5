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
      var y = noise(xoff) * height;
      //var y = height/2 + sin(xoff) * height/2;
      stroke(255);
      //point(x, y);
      vertex(x, y);
      xoff += inc;
   }
   endShape();

   start += inc;

   //noLoop();

   // Random noise
   //var x = random(width);

   // Perlin Noise
   // var x = map(noise(xoff1), 0, 1, 0, width);
   // var y = map(noise(xoff2), 0, 1, 0, height);
   // xoff1 += 0.01; // Speed
   // xoff2 += 0.01; // Speed

   //ellipse(x, y, 24, 24);
   
}