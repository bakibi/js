

var colls = [];


function setup(){
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )

    for(var i = 0;i<width/10;i++){
      let a = new cols(i*10);
      colls.push(a);

    }
}




function draw(){
  background(0);

  for(var i = 0;i<colls.length;i++){
    let a = colls[i];
      a.move();
      a.render();
  }
}



function Symbol(x,y){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = 2;


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





function cols(x){
  this.symbols = [];
  this.x = x;
  this.offset = 10;

  var mm = random(0,height/this.offset);
  for(var i = 0;i<=mm;i++){
    var n = new Symbol(this.x,this.offset * i);
    n.setRandomSymbol();
    this.symbols.push(n);
  }

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



}
