class Pixy {
  constructor(off, size, res) {
    this.off = off;
    this.size = size;
    this.res = res;
    this.img = createImage(res[0], res[1]);
    this.loadPixels();
  }
  
  loadPixels() {
    this.img.loadPixels();
  }
  
  updatePixels() {
    this.img.updatePixels();
  }
  
  setPixel(loc, col) {
    this.img.set(loc[0], loc[1], col);
  }
  
  display() {
    push();
    {
      noSmooth();
      image(this.img, this.off[0], this.off[1], this.size[0], this.size[1]);
    }
    pop();
  }
}
