let x2 = 1000;
let y2 =90;
let mic;
// let waitForClick = true;

 function setup(){
  //getAudioContext().suspend();
  let cnv = createCanvas(1024, 1366);
  background(255);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(30);
  strokeCap(SQUARE);
  strokeWeight(45);
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
  console.log(micLevel);
  x2 --;
  whiteLine(100, y2, x2, y2)
  if(y2 < 1200){
      if (micLevel > 0.001){
        blackLine(100 , y2, (x2), y2)
      }
    }
  if (x2 == 100){
      x2 = 1000;
      y2 = y2 +90;
      }
  if(y2>=1200){
     //saveCanvas(cnv,"present moment_" + Date.now(),"png");
     clear();    
     background(255);
     y2 = 90;
  }
}
