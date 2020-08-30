
const noiseScale = 0.0009;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
}

function draw() {
  background(0);

  for (let i = 0; i < width; i++) {
    const t = noise((frameCount+i*2)*noiseScale, frameCount*noiseScale);
    stroke(`hsl(${~~(map(i, 0, width, 0, 360))}, 100%, 50%)`);
    line(i, height-height/2 + t*height/2, i, height);
  }
}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}
