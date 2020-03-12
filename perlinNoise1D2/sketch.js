var xoff1 = 0;
var xoff2 = 10000;
function setup() {
   createCanvas(400, 400); 
   
}

function draw() {
   background(51);
   // Random noise
   //var x = random(width);

   // Perlin Noise
   var x = map(noise(xoff1), 0, 1, 0, width);
   var y = map(noise(xoff2), 0, 1, 0, height);
   xoff1 += 0.01; // Speed
   xoff2 += 0.01; // Speed

   ellipse(x, y, 24, 24);
   
}