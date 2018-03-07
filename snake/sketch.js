



var s;
var food;
var scl = 10;
var BestScoreP,BestScoreV = 0;
var button;




function setup(){
  noLoop();
  BestScoreP = createP("Best Score:");
  BestScoreP.class('bestscore');
  BestScoreP.position(600,30);

  createCanvas(500,500);
  s = new Snake(scl);

  button = createButton('jouer');
  button.position(200,60);
  button.mousePressed(function(){
    s.tail = []
    s.total = 0;
    loop();
  });


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
  if(s.death()){
    BestScoreV = s.tail.length;
    BestScoreP.html("Best Score:"+BestScoreV);
    noLoop();
  }
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
