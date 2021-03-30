var fixedRect, movingRect,obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "cyan";
  obj1.velocityY = 5;
  obj2 = createSprite(1000,100,50,50);
  obj2.shapeColor = "cyan";
  obj2.velocityY = 5;
  obj3 = createSprite(100,600,50,50);
  obj3.shapeColor = "cyan";
  obj3.velocityY = -5;
  obj4 = createSprite(1000,600,50,50);
  obj4.shapeColor = "cyan";
  obj4.velocityY = -5;
}

function draw() {
  background(0,0,0);  

 bounce(movingRect,fixedRect);


  drawSprites();
}

