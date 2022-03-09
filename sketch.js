var astronaut1Img, astronaut2Img,astronaut1,astronaut2;
var goal1, goal2;
var bg, bgImg;
var ball;

function preload(){
  bgImg = loadImage("images/mars.png")
  astronaut1Img = loadImage("images/astronaut 1.png")
  astronaut2Img = loadImage("images/astronaut mirrior.png")
  goal1 = loadImage("images/goal 1.png")
  goal2 = loadImage("images/goal mirrior.png")
  ball = loadImage("images/ballimg.png")
}

function setup(){
  createCanvas (1000,700)
  astronaut1 = createSprite(50,200,30,30)
 astronaut1.addImage("astronaut1Img")
  astronaut1.scale = 0.1
  
}

function draw(){
background(51)
 drawSprites()
}