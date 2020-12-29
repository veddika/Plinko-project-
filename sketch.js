const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    var engine,world;
    var plinkos = [];
    var divisions = [];
    var particles = [];
    var divisionsHeight = 180;

function setup()
 {
    createCanvas(500, 600);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(599,590,1200,30);
    for(var i = 40; i<= width; i = i+50)
    {
      plinkos.push(new Plinko(i , 75))
    }
    for(var i = 15; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,125))
    }
    for(var i = 40; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,175))
    }
    for(var i = 15; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,225))
    }
    for(var i = 40; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,275))
    }
    for(var i = 15; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,325))
    }
    for(var i = 40; i<= width-10; i = i+50){
      plinkos.push(new Plinko(i ,375))
    }
  
   
    for(var k = 10; k <=width; k = k+80){
      divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
    }

  }
 
 
function draw() { 
  if(frameCount % 40 === 0){
    particle = new Particle(random(120, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background(0);
   Engine.update(engine);

for(var i = 0; i < particles.length; i++){
  particles[i].display();
 }

  for(var a = 0; a<divisions.length;a++){
  divisions[a].display();
}
   for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  
 }
  ground.display();   


  textMessage();
}

function textMessage()
{
  textSize(30);

  text ("Enjoy The Game Of PLINKO",70,30)
  
  push();
  textSize(91);
  fill("White");
  stroke("Black");
  strokeWeight(6);
   text ("P L I N K O",30,500)
  pop();
}