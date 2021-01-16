var bird;
var pipes = [];
function setup() {
  canvas = createCanvas(400, 600);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('canvas-content');
  
  bird = new Bird();
  pipes.push(new Pipe());
}


function draw() {
  background(0);
  
  for(var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();
    
    if(pipes[i].hits(bird)) {
      console.log("Bateu!");   
    }
    
    if(pipes[i].offscreen()) {
      pipes.splice(i, 1);   
    }
  }
  
  bird.update();
  bird.show();

  if(frameCount % 120 == 0)  {
    pipes.push(new Pipe());     
  }
}

function keyPressed() {
  if(key == ' ') {
    bird.flappy();     
  }
}