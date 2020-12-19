const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {           
  createCanvas(480,800);
  engine = Engine.create();
   world = engine.world; 
  ground = new Ground(270,790,550,30);
}

function draw() {
  background(0);
    Engine.update(engine);
 
    //to create divisions
    for(var k = 0; k <=width; k = k+ 80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
     
    //displaying the divisions
    for(var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }
    
    //making particles every 60th frame
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    }

    //displaying the particles
    for(var a = 0; a < particles.length; a++){
      particles[a].display();
    }
    
    //creating the plinkos
    for(var p = 40; p<=width; p=p+50){
     plinkos.push(new Plinko(p,75)); 
     }
     for(var p = 15; p<=width-10; p=p+50){
      plinkos.push(new Plinko(p,175)); 
      }
      for(var p = 40; p<=width-20; p=p+50){
        plinkos.push(new Plinko(p,275)); 
        }
        for(var p = 15; p<=width-30; p=p+50){
          plinkos.push(new Plinko(p,375)); 
          }
     

  //displaying the plinkos
  for(var p = 0; p < plinkos.length; p++){
   plinkos[p].display();
  }



   ground.display();

   drawSprites();
}

