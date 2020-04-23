const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint;

var engine,world

function setup() {
  createCanvas(400,400);
 
  engine=Engine.create();
  world=engine.world;

  log=Bodies.rectangle(200,100,30,90);
  
  World.add(world,log);
  bob=Bodies.circle(200,300,40);
  World.add(world,bob);
  fill("violet");
  

  var options={
    bodyA:log.body,
    bodyB:bob.body,
    stiffness:0.04,
    length:10
  }
  var chain=Constraint.create(options);
  World.add(world,chain);
}

function draw() {
  background("pink");
  Engine.update(engine);
  bob.body.position.x=World.mouseX;
  bob.body.position.y=World.mouseY;
  rectMode(CENTER);
  rect(log.position.x,log.position.y,30,90);
  fill(aqua);
  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,40,40);
  fill("yellow");
  strokeWeight(4);
  line(log.body.position.x,log.body.position.y,bob.body.position.x,bob.body.position.y);
  
}