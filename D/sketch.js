function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  for (let cnt = 0; cnt < l; cnt++) {
    line(c, -c, r, 0);
    line(c, c, r, 0);
    rotate(360 / l);
  }

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(4);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      push();
      translate(x, y);

      let rcc = random(["#ff00ff", "#ff0000", "#00ffff"]);
      fill(rcc);

      let rn = random(0, 6);
      let rd = random([25, 36, 80, 120]);
      if (rn < 2) {
        rect(0, 0, rd);
      } else if (rn < 4) {
        ellipse(0, 0, rd);
      } else {
        star(0, 0, rd, 10, 4);
      }

      pop();
    }
  }
}

function draw() {}

function mouseClicked() {
  setup();
}
