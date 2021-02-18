const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var hammer, stoneSquare, rubberCcl, tinySand;

var ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 390, 800, 20);
  hammer = new Hammer(200, 100);
  stoneSquare = new Stone(78, 100);
  rubberCcl = new Rubber(123, 100, 40);
  tinySand = new Sand(234, 100, 4);

  console.log(object);
}

function draw() {
  background(138, 148, 368);  
  Engine.update(engine);
  drawSprites();
  rectMode(CENTER);

  ground.display();
  hammer.display();
  rubberCcl.display();
  tinySand.display();
  stoneSquare.display();
}

