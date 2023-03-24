let x= 1;
function setup() {
  createCanvas(360, 640);
  frameRate(60);
}

function draw() {
  strokeWeight(6);
  background(240);
  line(x, 0, x, 1600);
  x++;
  if(x == 360){
    x = 1;
  }
}