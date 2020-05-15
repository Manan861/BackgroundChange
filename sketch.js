

var movingElipse;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

   
function setup(){

  createCanvas(400,400);
  movingElipse = createSprite(200,200,50,80);
  movingElipse.shapeColour="blue";
}


function draw(){
  movingElipse.position.x=mouseX;

  if(movingElipse.position.x<200){
    background(51,255,55);
  }
   if(movingElipse.position.x>200){
    background(0,204,204);
   }
  if(movingElipse.position.x==200){
    background(255,153,51);
  }

  ellipseMode(RADIUS);
  ellipse(movingElipse.position.x,movingElipse.position.y,10);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}