function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 50;
  this.speed = 1;
  this.highlight = false;
  
  this.show = function() {
    
    fill(0, 200, 0); 
    if(this.highlight) {
      fill(255, 0, 0);   
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }
  
  this.update = function() {
    this.x -= this.speed;  
  }
  
  this.offscreen = function() {
    if(this.x < - this.w) {
      return true;   
    } else {
      return false;
    }
  }
  
  this.hits = function(bird) {
    if((bird.y - bird.size/2) < this.top || (bird.y + bird.size/2) > height - this.bottom) {
      if(((bird.x + bird.size/2) > this.x) && ((bird.x - bird.size/2) < (this.x + this.w))) {
        this.highlight = true;
        return true;
      } else {
        this.highlight = false;
        return false;
      }
    } else {
      this.highlight = false;
      return false; 
    }
  }
}