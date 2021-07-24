const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var roof;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic:true
	}
	
	roof = Bodies.rectangle(200,200,300,20,roof_options);
	World.add(world,roof);

	var  bobObject1_options = {
		isStatic:false,
		restitution:1.3,
		friction:0,
		density:7.8,
	}
	bobObject1 = Bodies.circle(250,500,25,bobObject1_options);
	World.add(world,bobObject1);

	var  bobObject2_options = {
		isStatic:false,
		restitution:1.3,
		friction:0,
		density:7.8,
	}
	bobObject2 = Bodies.circle(300,500,25,bobObject2_options);
	World.add(world,bobObject2);

	var  bobObject3_options = {
		isStatic:false,
		restitution:1.3,
		friction:0,
		density:7.8,
	}
	bobObject3 = Bodies.circle(350,500,25,bobObject3_options);
	World.add(world,bobObject3);

	var  bobObject4_options = {
		isStatic:false,
		restitution:1.3,
		friction:0,
		density:7.8,
	}
	bobObject4 = Bodies.circle(400,500,25,bobObject4_options);
	World.add(world,bobObject4);

	var  bobObject5_options = {
		isStatic:false,
		restitution:1.3,
		friction:0,
		density:7.8,
	}
	bobObject5 = Bodies.circle(450,500,25,bobObject5_options);
	World.add(world,bobObject5);

	rope1 = new Rope(bobObject1,roof,+40,10);
	
	rope2 = new Rope(bobObject2,roof,+90,10);

	rope3 = new Rope(bobObject3,roof,+140,10);
	
	rope4 = new Rope(bobObject4,roof,+190,10);

	rope5 = new Rope(bobObject5,roof,+240,10);

	Engine.run(engine);
	
  
}

function draw() {

  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,300,20);
  ellipse(bobObject1.position.x,bobObject1.position.y,50);
  ellipse(bobObject2.position.x,bobObject2.position.y,50);
  ellipse(bobObject3.position.x,bobObject3.position.y,50);
  ellipse(bobObject4.position.x,bobObject4.position.y,50);
  ellipse(bobObject5.position.x,bobObject5.position.y,50);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyReleased(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1,bobObject1.position,{x:-730 , y:0});
	  console.log("hi");
	}
  }
