
// this function remove a element from a array
function removeFromArray(arr,elmt){
  for(var i = arr.length -1 ;i>=0; i--){
    if(arr[i] == elmt){
      arr.splice(i,1);
    }
  }
}


// heuristic function
function heuristic(a,b){
  //var d = dist(a.i,a.j,b.i,b.j);
  var d = abs(a.i-b.i) + abs(a.j - b.j);
  return d;

}

// LES VARIABLES CHANGEANT
var cols = 25;
var rows = 25;

// La grid ou la surface
var grid = new Array(cols);


var openSet = [];//Les cellules non traiter
var closeSet = [];// les cellules qu on a fini a traiter
var start;//le point de depart
var end;// le point d'arriver
var w ,h;
var path  = [];


//
function Spot(i,j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.h = 0;
    this.g = 0;
    this.neighbors = [];
    this.previous = undefined;
    this.show = function(col){
      fill(col);
      noStroke();
      rect(this.i*w,this.j*h,w-1,h-1);
    }
    this.addNeighbors = function(grid){
      var i = this.i;
      var j = this.j;

      if(i<cols-1) this.neighbors.push(grid[i+1][j]);
      if(i>0) this.neighbors.push(grid[i-1][j]);
      if(j<rows -1) this.neighbors.push(grid[i][j+1]);
      if(j>0) this.neighbors.push(grid[i][j-1]);

}
}


function setup(){
  createCanvas(400,400);
  console.log('A*');
  w = width/ cols;
  h = height / rows;

    for(var i = 0;i<cols;i++){
      grid[i] = new Array(rows);
    }

    for(var i = 0;i<cols;i++){
          for(var j = 0;j<cols;j++){
              grid[i][j] = new Spot(i,j);
          }
    }

    for(var i = 0;i<cols;i++){
          for(var j = 0;j<cols;j++){
              grid[i][j].addNeighbors(grid);
          }
    }


    start = grid[0][0];
    end  = grid[cols-1][rows-1];

    openSet.push(start);
    console.log(grid);

}


function draw(){

  if(openSet.length > 0){
    // on fait notre traitment
    var winner = 0;
    for (var i = 0; i < openSet.length; i++) {
      if(openSet[i].f<openSet[winner].f){
        winner = i;
      }
    }

    var current = openSet[winner];
    if(current == end){

      noLoop();//stop looping
      console.log("DONE");
    }

    removeFromArray(openSet,current);
    closeSet.push(current);

    var neighbors = current.neighbors;
    for(var i=0;i<neighbors.length;i++){
      var neighbor = neighbors[i];
      if(!closeSet.includes(neighbor)){
        var tempG = current.g + 1;
          if(openSet.includes(neighbor)){ // si il est dans la openSet
            if(tempG<neighbor.g){
              neighbor.g = tempG;
            }
          }else { // si il n'est pas dans la open
            neighbor.g =   tempG;
            openSet.push(neighbor);
          }
          neighbor.h = heuristic(neighbor,end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
      }
    }//end for

  } //openSet.length>0

  background(0);



  for(var i = 0;i<cols;i++){
        for(var j = 0;j<cols;j++){
            grid[i][j].show(color(255));
        }
  }

  for(var i=0;i<closeSet.length;i++){
    closeSet[i].show(color(255,0,0));
  }
  for(var i=0;i<openSet.length;i++){
    openSet[i].show(color(0,255,0));
  }


  path = [];
  temp = current;
  path.push(temp);
  while(temp.previous){
    path.push(temp.previous);
    temp = temp.previous;
  }
  for(var i= 0; i<path.length;i++){
    path[i].show(color(0,0,255));
  }
}
