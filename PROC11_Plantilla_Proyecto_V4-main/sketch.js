var boat_floating
var boat 
var sea
var sea_img
function preload(){
boat_floating=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_img=loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
  sea= createSprite(200,200,50,50)
  sea.scale=0.3
  sea.addImage("oceano",sea_img)
  boat = createSprite(80,200,50,50)
  boat.addAnimation("animacion_barco",boat_floating)
  boat.scale=0.2
  sea.velocityX = -4;
  sea.x = sea.width /2;
  
}

function draw() {
  
  background("blue");
  drawSprites()
  console.log(sea.position.x)
  if (sea.x<0){
    sea.x = sea.width /2;
    
  }

  
 
}