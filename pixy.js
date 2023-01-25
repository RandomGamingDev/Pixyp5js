class Pixy {
  constructor(off, size, res) {
    this.off = off;
    this.size = size;
    this.res = res;
    this.pixels = [];
    for (let i = 0; i < res[0]; i++) {
      this.pixels.push([]);
      for (let j = 0; j < res[1]; j++)
        this.pixels[i].push(undefined);
    }
  }
  
  display() {
    push();
    for (let i = 0; i < this.res[0]; i++)
      for (let j = 0; j < this.res[1]; j++) {
        if (this.pixels[i][j] == undefined)
          continue;
        fill(this.pixels[i][j]);
        let pixelSize = [this.size[0] / this.res[0], this.size[1] / this.res[1]];
        rect(
              this.off[0] + pixelSize[0] * i,
              this.off[1] + pixelSize[1] * j,
              pixelSize[0],
              pixelSize[1]
            );
      }
    pop();
  }
}
