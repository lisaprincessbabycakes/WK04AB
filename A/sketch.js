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
  background(150, 150, 220);
  strokeWeight(2);
  angleMode(DEGREES);

  star(width / 4, height / 2, 200, 10, 18);
  star(width / 2, height / 2, 350, 25, 2);
  star((3 * width) / 4, height / 2, 100, 10, 6);

  for (let x = 100; x < width; x += 200) {
    star(x, 100, 200, 12, 18);
  }
}

function draw() {}
