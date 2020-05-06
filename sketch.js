var bullet,wall,thickness;
var speed,weight;


function setup() {
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
 background(0); 

if(wall.x-bullet.x < (bullet.width+wall.width)/2){

   bullet.velocityX=0;
   var deformation =0.5 * weight * speed* speed/22509;
   if(deformation>180 ){
      bullet.shapeColor=color(255,0,0);
   }

   if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
   }

  if(deformation<100){
     bullet.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
function hasCollided(bullet, wall){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness );

  if (damage>10) {
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10) {
    wall.shapeColor=color(0,255,0,);
  }
}