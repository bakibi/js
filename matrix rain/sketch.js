

var colls = [];


function setup(){
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )

    for(var i = 0;i<width/10;i++){
      let a = new cols(i*10,random(2,20));
      colls.push(a);

    }
}




function draw(){
  background(0);

  for(var i = 0;i<colls.length;i++){
    let a = colls[i];
    if(a.hasFinished() == false){
      a.move();
      a.render();
    }
    else {
      a.refrech(random(2,20));
      a.move();
      a.render();
    }

  }
}



function Symbol(x,y,sp){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = sp;




  this.setRandomSymbol = function(){ // katakana code
      this.value = String.fromCharCode(
        0x30A0 + round(random(0,96))
      );
  }

  this.render = function(){
    fill (0,255,70);
    text(this.value,this.x,this.y);
  }



  this.move = function(){
    this. y += this.speed;
  }

}





function cols(x,sp){
  this.symbols = [];
  this.x = x;
  this.offset = 10;
  this.speed = sp;

  this.refrech = function(spp){
    this.symbols = [];
    var mm = random(0,height/this.offset);
    for(var i = 0;i<=mm;i++){
      var n = new Symbol(this.x,this.offset * i,spp);
      n.setRandomSymbol();
      this.symbols.push(n);
    }

  }
    this.refrech(this.speed);


  this.render = function(){

      for(var i=0;i<this.symbols.length;i++){
        var n = this.symbols[i];
        n.render();

    }
  }




  this.move = function(){
    for(var i=0;i<this.symbols.length;i++){
      this.symbols[i].move();
    }
  }


  this.hasFinished=function(){
    if(this.symbols[0].y>=height)
      return true;
    return false;
  }


}
