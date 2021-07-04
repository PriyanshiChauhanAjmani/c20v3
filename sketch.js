const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

function setup(){
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(myWorld,ball);
  ground_options = {
    isStatic:true
  };
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
  ellipseMode(RADIUS);
  rectMode(CENTER);
}
function draw(){
  background(51);
  Engine.update(myEngine);
  fill("pink");
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
}

