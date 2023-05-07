let x2 = 110;
let y2 =30;
let mic;
// let waitForClick = true;

 function setup(){
  //getAudioContext().suspend();
 let cnv = createCanvas(120, 360);
  background(255);
  cnv.touchStarted(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(15);
  strokeCap(SQUARE);
  strokeWeight(6);
  loop();
}
//function touchStarted(){
 //if (!waitForClick) return;
 //userStartAudio();
 //mic = new p5.AudioIn();
 //background(255);
 //mic.start();
 //waitForClick = false;
 //return false;
//}
 function blackLine(x1, y1, x2, y2){
   stroke(0);
   line (x1, y1, x2, y2);
   
 }
 function whiteLine(x1, y1, x2, y2){
   stroke(255);
   line (x1, y1, x2, y2);
   
 }


function draw(){  
 // if (waitForClick) {
   // background(33);
   //return;
// } 
  //strokeWeight(60);
  micLevel = mic.getLevel();
 // console.log(micLevel);
  x2 --;
  whiteLine(11, y2, x2, y2)
  if(y2 < 330){
      if (micLevel > 0.05){
        blackLine(11, y2, (x2), y2)
      }
    }
  if (x2 == 10){
      x2 = 110;
      y2 = y2 +10;
      }
  if(y2==330){
     saveCanvas(cnv,"present moment_" + Date.now(),"png");
     clear();    
     background(255);
     y2 = 30;
  }
}
