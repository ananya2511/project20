var car,wall;
var speed,height;


function setup() {
  speed= random(55,90);
  weight=random(400,1500);
  createCanvas(1600,600);
  car= createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width/2))
  {
car.velocityX=0;
var deformation =0.5*weight*speed*speed/22500;
if(deformation>100){
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

