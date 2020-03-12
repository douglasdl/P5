let w;
let pos;

function setup() {
   createCanvas(400, 400); 
   w = new Walker(width / 2, height / 2);
   background(0);
}

function draw() {
   w.update();
   w.show();
}