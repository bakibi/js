



var s;
var food;
var scl = 10;


function setup(){
createCanvas(500,500);
s = new Snake(scl);
frameRate(10);
  new_position_food();
}

function new_position_food(){
  var rows = floor(height/scl);
  var cols = floor(width/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function draw(){
  background(51);
  s.death();
  s.update();
  s.show();
  if(s.eat(food)){
    new_position_food();
  }
  fill(255,0,255);
  rect(food.x,food.y,scl,scl)


}



function keyPressed(){
  if(keyCode === UP_ARROW){
    if(s.xspeed !=0 && s.yspeed!=1)//si il part  pas  derrienre
      s.dir(0,-1);
  } else if(keyCode == DOWN_ARROW){
    if(s.xspeed !=0 && s.yspeed!=1)// si il part  pas devant
      s.dir( 0,1);
  }else if(keyCode == RIGHT_ARROW){
    if(s.xspeed !=-1 && s.yspeed!=0)//si il marche pas  a gauche
      s.dir( 1,0);
  }else if (keyCode == LEFT_ARROW){
    if(s.xspeed !=1 && s.yspeed!=0)// si il marche pas  a droite
      s.dir( -1,0);
  }

}
