const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300
var particles = [];

var divisions = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground1 = new Ground(240, height, width+10, 20)
 

}

function draw() {
  background(0);
  Engine.update(engine);  
  ground1.display();
  for(var k = 0; k<= width; k = k +80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight).display())
    
  }

  for (var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j, 75, 20).display());
 }
 
 for (var j = 13; j<= width; j = j+50){
  plinkos.push(new Plinko(j, 175, 20).display());
}

for (var j = 40; j<= width; j = j+50){
  plinkos.push(new Plinko(j, 275, 20).display());
}

for (var j = 13; j<= width; j = j+50){
  plinkos.push(new Plinko(j, 375, 20).display());
}
if (frameCount%10===0){
  particles.push(new Particle(random(width/2-10,width/2+10), 10, 5));
}

for(var j = 0; j< particles.length; j++){
 particles[j].display();
  
}

}