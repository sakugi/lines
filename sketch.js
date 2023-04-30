let x2 = 1100;
let y2 =300;
let mic;
let waitForClick = true;

 function setup(){
  //getAudioContext().suspend();
  mycanvas = createCanvas(1200, 3600);
  background(255);
  //mic = new p5.AudioIn();
  //mic.start();
  frameRate(15);
  strokeCap(SQUARE);
  loop();
}
function touchStarted(){
 if (!waitForClick) return;
 userStartAudio();
 mic = new p5.AudioIn();
 background(255);
 mic.start();
 waitForClick = false;
 return false;
}
 function blackLine(x1, y1, x2, y2){
   stroke(0);
   line (x1, y1, x2, y2);
   
 }
 function whiteLine(x1, y1, x2, y2){
   stroke(255);
   line (x1, y1, x2, y2);
   
 }


function draw(){  
  if (waitForClick) {
    background(33);
   return;
 } 
  strokeWeight(6);
  micLevel = mic.getLevel();
 // console.log(micLevel);
  x2 --;
  whiteLine(11, y2, x2, y2)
  if(y2 < 3300){
      if (micLevel > 0.05){
        blackLine(11, y2, (x2), y2)
      }
    }
  if (x2 == 100){
      x2 = 1100;
      y2 = y2 +100;
      }
  if(y2==3300){
     saveCanvas(mycanvas,"present moment_" + Date.now(),"png");
     clear();    
     background(255);
     y2 = 300;
  }
}
