var staticVideo
var static1
var static2
var indianCard
var kfmb
var testBars
var testcardF
var gridSize = 150;
var static = []



function preload(){
  testBars = loadImage('/assets/img/testBars.jpg')
  static1 = loadImage('/assets/img/1.jpg')
  static2 = loadImage('/assets/img/2.jpg')
  indianCard = loadImage('/assets/img/indianCard.jpg')
  kfmb = loadImage('/assets/img/kfmb.jpg')
  testcardF = loadImage('/assets/img/testcardF.jpg')
  static = [testBars, static1, static2, indianCard, kfmb, testcardF]
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  staticVideo = createVideo('assets/vid/staticvideo.mp4')
  staticVideo.hide()
  staticVideo.loop();
  frameRate(1);
  imageMode(CENTER)

  // staticVideo.speed(5)
  // background(77, 84, 179)


} // END SETUP

function draw() {
  background(255)
  var s = map(mouseX, 0,width,1,10)
  console.log(s);
  for (var x = 0; x<=width; x+=gridSize){
  for (var y = 0; y<=height; y+=gridSize){
    }
  }
  image(staticVideo, windowWidth/2,500, 1920, 1080)

  // image(testBars, random(gridSize*s), random(gridSize*5))
  // image(static1, random(gridSize*9), random(gridSize*s))
  // image(static2, random(gridSize*11), random(gridSize*s))
  // image(indianCard, random(gridSize*s), random(gridSize*8))
  // image(kfmb, random(gridSize*13), random(gridSize*s))
  // image(testcardF, random(gridSize*8), random(gridSize*5), 1920/2, 1080/2)

  image(random(static), random(500),random(500))
  image(random(static), random(gridSize*7),random(gridSize*5))
  image(random(static), random(gridSize*s),random(gridSize*7))
  console.log(static);
  // console.log(staticVideo.duration());
  // console.log(staticVideo.time());

staticVideo.speed(s)


  if (keyIsDown(32)) {
  filter(INVERT);
  image(random(static), random(windowWidth),windowHeight)
  }
  if (keyIsDown(66)) {
  filter(BLUR,3);
  image(random(static), random(windowWidth),windowHeight)
  }

  if(key === 's'){
  save()
}

} //END DRAW

// var b = map(mouseY,0,height,1,10)
// filter(BLUR,b);

// if (staticVideo.time() > 1.5) {
//   fill(255,0,100)
//   // ellipse(windowWidth/2,windowHeight/2,300,300)
// }
// }

// function mousePressed(){
//   staticVideo.play()
// }
//
// function mouseReleased(){
//   staticVideo.stop()
// }
