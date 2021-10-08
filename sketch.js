var player, playerImg;
var bg,backgroundImg;

function preload(){
 playerImg = loadAnimation('images/player.gif');
 backgroundImg = loadImage('images/background.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(backgroundImg);
  bg.velocityX = -10
  player = createSprite(400, 200, 100, 100);
  player.addAnimation('player',playerImg);
  player.scale = 0.5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}