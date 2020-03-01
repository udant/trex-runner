var r = 0;
var g = 50;
var b=255;
var elli;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
  //elli = createSprite(200,200,400,200);
}

function draw(){
  //background("white")
  //ellipse(200,200,400,200);
   
  background(0);
  // Scale the mouseX value from 0 to 640 to a range between 0 and 175
  let r = map(mouseX, 0, width, 0, 400);

  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  let b = map(mouseX, 0, width, 100, 300);

  let g = map(mouseX, 0, width, 100, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);


 // elli.shapeColor = "yellow";
  //elli.mouseX = World.mouseX; 
  //console.log(mouseX);
  /*if(mouseX<=400){
  background("red");
  }  
  else if(mouseX>=400 && mouseX<800){
    background("green");
  } 
  else if(mouseX>=800){
    background("blue");
  }*/
  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();

}