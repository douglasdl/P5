var xoff = 0;
function setup() {
   createCanvas(400, 400); 
   
}

function draw() {
   background(51);
   // Random noise
   //var x = random(width);

   // Perlin Noise
   var x = map(noise(xoff), 0, 1, 0, width);
   xoff += 0.01; // Speed

   ellipse(x, 200, 24, 24);
   
}