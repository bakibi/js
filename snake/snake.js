

// this function create our snake
function Snake(scale){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.scale = scale;//vitesse
  this.total = 0;
  this.tail = [];
  this.update = function(){
    for(var i =0;i<this.tail.length-1;i++){
      this.tail[i] = this.tail[1+i];
    }
    if(this.total !=0){
      this.tail[this.total-1] = createVector(this.x,this.y);
    }
    this.x = this.x + this.xspeed*this.scale;
    this.y = this.y + this.yspeed*this.scale;
    this.x = constrain(this.x ,0,width-this.scale);
    this.y = constrain(this.y ,0,height-this.scale);
  }
  this.show = function(){
    fill(255);
    for(var i =0;i<this.total;i++){
      rect(this.tail[i].x,this.tail[i].y,this.scale,this.scale);
    }
    rect(this.x,this.y,this.scale,this.scale);
  }

  this.dir = function (a,b){
    this.xspeed = a;
    this.yspeed = b;
  }


  this.eat  = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);
    if(d<1){
      this.total++;
      return true;
    }
    return false;
  }


  this.death = function(){
    for(var i=0;i<this.tail.length;i++){
      var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d<1){
        this.total = 0;
        this.tail = [];
        return true;
      }else{
        return false;
      }
    }
  }
}//end Snake
