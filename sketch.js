let x=100;
let y=100;
let xspeed=2;
let yspeed=3;
let radius=25;


function setup() {
  createCanvas(400, 400);

}

function draw() {
   background("lavender");
circle(x, y, radius*2);
  
  x += xspeed;
  y += yspeed;
  
  if(x+radius> width || x-radius<0){
    xspeed=-xspeed
  }
  if(y+radius> width || y-radius<0){
    yspeed=-yspeed
  }
    
}  