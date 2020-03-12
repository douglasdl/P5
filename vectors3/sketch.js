let w;
let pos;

function setup() {
   	createCanvas(400, 400); 
   	w = new Walker(width / 2, height / 2);
   
}

function draw() {
	background(0);
   	w.update();
   	w.show();
}