const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var maxDrops = 100;
var drops = [];

function preload(){
  
    Man = loadImage("Walking Frame/walking_1.png");
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400, 800);
	rectMode(CENTER);
    
	engine = Engine.create();
	world = engine.world;

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    man = new Umbrella(200,700)
    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    imageMode(CENTER)
    background(0);
    man.display();

    image(Man,200,700,250,250);
  
   
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
    creatingThunder();
}
function creatingThunder(){

    rand = Math.round(random(1,4))
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage(thunder1)
            break;
            case 2:thunder.addImage(thunder2)
            break;
            case 3:thunder.addImage(thunder3)
            break;
            case 4:thunder.addImage(thunder4)
            break;
            default: break;
        }
            thunder.scale = random(0.3,0.6);
        }
    }
