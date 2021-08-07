
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 630);

	

	engine = Engine.create();
	world = engine.world;

	var ball_options= {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
     ball=Bodies.circle(200, 300, 20,[ball_options]);
     World.add(world,ball);

	  groundObj=new Ground(width/2,600,width,10);
	  leftSide =new Ground(900,560,10,70);
    rightSide =new Ground(1030,560,10,70);

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  groundObj.display();
  ellipse(ball.position.x,ball.position.y,20)

  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.04, y:-0.05})
   }
}

