// let x;
// let y;
let pos;

function setup() {
   createCanvas(400, 400); 
   // x = width / 2;
   // y = height / 2;
   pos = createVector(width / 2, height / 2);
   background(0);
}

function draw() {
   stroke(255, 100);
   strokeWeight(2);
   point(pos.x, pos.y);
   const r = floor(random(4));
   switch (r) {
      case 0:
         pos.x = pos.x + 1;
         break;
      case 1:
         pos.x = pos.x - 1;
         break;
      case 2:
         pos.y = pos.y + 1;
         break;
      case 3:
         pos.y = pos.y - 1;
         break;         
   }

}