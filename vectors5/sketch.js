function setup() {
   	createCanvas(400, 400); 
   	background(0);
}

function draw() {
	translate(width / 2, height / 2);

	let v = createVector(random(-100, 100), random(-100, 100));
   	strokeWeight(4);
   	stroke(255);
   	line(0, 0, v.x, v.y);
}