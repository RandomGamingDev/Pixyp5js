class Pixy {
  constructor(off, size, res, img = createImage(res[0], res[1]), rdr = window, canvas = _renderer) {
    this.off = off;
    this.size = size;
    this.res = res;
    this.img = img;
    this.loadPixels();
    this.rdr = rdr;
    this.canvas = canvas;
  }
  
  loadPixels() {
    this.img.loadPixels();
  }
  
  updatePixels() {
    this.img.updatePixels();
  }
  
  setInterpolation(min, mag) {
    this.canvas.getTexture(this.img).setInterpolation(min, mag);
  }
  
  getPixel(loc) {
    const startLoc = (loc[1] * this.res[0] + loc[0]) * 4;
    return this.img.pixels.slice(startLoc, startLoc + 4);
  }
  
  setPixel(loc, col) {
    this.img.set(loc[0], loc[1], col);
  }
  
  clear() {
    const pixyBuffer = this.img.pixels.buffer;
    const clearRegions = [Math.floor(pixyBuffer.byteLength / Float64Array.BYTES_PER_ELEMENT), undefined];
      clearRegions[1] = pixyBuffer.byteLength - clearRegions[0] * Float64Array.BYTES_PER_ELEMENT;
    const clear64 = new Float64Array(pixyBuffer, 0, clearRegions[0]);
    const clear8 = new Int8Array(pixyBuffer, clear64.byteLength, clearRegions[1]);

    for (let i = 0; i < clear64.length; i++)
        clear64[i] = 0;
    for (let i = 0; i < clear8.length; i++)
        clear8[i] = 0; 
  }
  
  display() {
      this.rdr.image(this.img, this.off[0], this.off[1], this.size[0], this.size[1]);
  }

  shaderDisp(shad) {
    shad.setUniform("uSampler", this.img);
    rect(this.off[0], this.off[1], this.size[0], this.size[1]);
  }
}
