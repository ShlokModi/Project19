var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 20);
  movingRect = createSprite(400,300,20,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  fixedRect.velocityY = 3;
  movingRect.velocityY = -3;
  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
}

function draw() {
  background(0); 
  movingRect.y = World.mouseY; 
  movingRect.x = World.mouseX;
if (movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 
  && fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2
  && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if (movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX*-1;
    movingRect.velocityX = movingRect.velocityX*-1;
  }
if (fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2
  && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2){
   
  movingRect.velocityY = movingRect.velocityY*1;
  fixedRect.velocityY = fixedRect.velocityY*1;
  }
    drawSprites();
}