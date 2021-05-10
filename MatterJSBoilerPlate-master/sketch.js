
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var bobDiameter = 60;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(250,300,60)
	bobObject2 = new Bob(311,300,60)
	bobObject3 = new Bob(372,300,60)
	bobObject4 = new Bob(433,300,60)
	bobObject5 = new Bob(494,300,60)

	roof = new Roof(370, 100, 300, 30)

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1, 2)
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*0, 4)
	rope4 = new Rope(bobObject4.body,roof.body,+bobDiameter*1, 6)
	rope5 = new Rope(bobObject5.body,roof.body,+bobDiameter*2, 8)



	Engine.run(engine);
  
}


function draw() {
  background(220);
  rectMode(CENTER);
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-45});
	 }
}


