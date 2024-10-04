function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 1.0 * pitch;
  translate(pitch / 2, pitch / 2);

  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      // draw concentric squares
      for (let dd = sqDim; dd > 0; dd -= 8) {
        push();
        translate(x, y);
        // dd goes from sqDim -> 0, so (sqDim - dd) will go from 0 -> sqDim
        rotate(sqDim - dd);
        rect(0, 0, dd);
        pop();
      }
    }
  }
}

function draw() {}
