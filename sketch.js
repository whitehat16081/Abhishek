var player1,player1Image;
var player2,player2Image;
var enemy1,enemy1Image;
var enemy2,enemy2Image;
var obstaclesGroup;
var backgroundImage;
var bullet1,bullet2,bullet,bulletImage;
var score=0;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var form,player;

function preload(){
player1Image=loadImage("Images/boy.png");
player2Image=loadImage("Images/player2.png");
enemy1Image=loadImage("Images/rob1.png");
enemy2Image=loadImage("Images/rob2.png");
backgroundImage=loadImage("Images/street.jpg");
bulletImage=loadImage("Images/bullet.png");
}

function setup(){
createCanvas(displayWidth - 20, displayHeight-30);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){

if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  game.end();
}
drawSprites();
}



