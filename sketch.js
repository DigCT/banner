let img;
let particles = [];

function preload() {
  img = loadImage("network.png.png");
}

function setup() {
  createCanvas(img.width, img.height);

  // create subtle floating particles
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      speed: random(0.1, 0.4),
      size: random(1, 2)
    });
  }
}

function draw() {

  background(0);

  // draw base image
  image(img, 0, 0);

  // shimmer sweep
  let shimmerX = (frameCount * 2) % width;

  noStroke();
  for (let i = 0; i < 120; i++) {
    let alpha = map(i, 0, 120, 60, 0);
    fill(255, 255, 255, alpha);
    rect(shimmerX - i, 0, 1, height);
  }

  // faint drifting particles
  noStroke();
  fill(255, 255, 255, 40);

  for (let p of particles) {

    ellipse(p.x, p.y, p.size);

    p.y -= p.speed;

    if (p.y < 0) {
      p.y = height;
      p.x = random(width);
    }
  }

}