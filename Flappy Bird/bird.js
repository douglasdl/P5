function Bird() {
  this.x = 64;
  this.y = height/2;
  this.size = 32;
  
  this.lift = -15;
  this.gravity = 0.6;
  this.velocity = 0;
  
  this.show = function() {
    fill(235, 155, 52);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  this.flappy = function () {
    this.velocity += this.lift;
    //this.y += this.velocity;
  }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; // Air resistence
    this.y += this.velocity;
    
    // Stop on the floor
    if(this.y > (height - this.size/2)) {
      this.y = height - this.size/2;
      this.velocity = 0;
    }
    // Stop on the ceiling
    if(this.y < (0 + this.size/2)) {
      this.y = this.size/2;
      this.velocity = 0;
    }
  }
  
}