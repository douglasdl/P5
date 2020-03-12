// var xoff1 = 0;
// var xoff2 = 10000;
function setup() {
   createCanvas(400, 400); 
   
}

function draw() {
   background(51);
   stroke(255);
   noFill();
   beginShape();
   var xoff = 0;
   for(var x = 0; x < width; x++) {
      //var y = random(height);
      var y = noise(xoff) * height;
      stroke(255);
      //point(x, y);
      vertex(x, y);
      xoff += 0.01;
   }
   endShape();

   noLoop();

   // Random noise
   //var x = random(width);

   // Perlin Noise
   // var x = map(noise(xoff1), 0, 1, 0, width);
   // var y = map(noise(xoff2), 0, 1, 0, height);
   // xoff1 += 0.01; // Speed
   // xoff2 += 0.01; // Speed

   //ellipse(x, y, 24, 24);
   
}