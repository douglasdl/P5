var cic = 1;
var parar = 0;

function setup() {
   	createCanvas(400, 400); 
   	background("white");
}

function draw() {
	translate(width / 2, height / 2);

	
	for(var i = 0; i < cic; i++) {
		petalas = p5.Vector.random2D();
	   	petalas.mult(random(50, 100));
	   	strokeWeight(4);
	   	stroke(255, 0, 0, 30);
	   	line(0, 0, petalas.x, petalas.y);
	}
   	
	for(var i = 0; i < cic; i++) {
	   	miolo = p5.Vector.random2D();
	   	miolo.mult(random(10, 30));
	   	strokeWeight(4);
	   	stroke(255, 255, 0, 70);
	   	line(0, 0, miolo.x, miolo.y);
	}
	noLoop();   	
}