class Walker {
   constructor(x, y) {
      this.pos = createVector(x, y);
   }

   update() {
      const r = floor(random(4));
      switch (r) {
         case 0:
            this.pos.x = this.pos.x + 1;
            break;
         case 1:
            this.pos.x = this.pos.x - 1;
            break;
         case 2:
            this.pos.y = this.pos.y + 1;
            break;
         case 3:
            this.pos.y = this.pos.y - 1;
            break;         
      }
   }

   show() {
      stroke(255, 100);
      strokeWeight(2);
      point(this.pos.x, this.pos.y);
   }
}