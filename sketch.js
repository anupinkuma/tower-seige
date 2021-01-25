const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var score=0;

function preload() {
    //getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,790,1200,10);

box1=new Box(600,740,50,50);
box2=new Box(650,740,50,50);
box3=new Box(700,740,50,50);
box4=new Box(750,740,50,50);
box5=new Box(630,680,50,50);
box6=new Box(680,680,50,50);
box7=new Box(730,680,50,50);
box8=new Box(650,630,50,50);
bird=new Bird(200,600,50,50);
slingshot=new SlingShot(bird.body,{x:200,y:580})
   
}

function draw(){
    background(255);
    //if(backgroundImg)
    //background(backgroundImg);
    Engine.update(engine);
    text(mouseX,250,30);
    text(mouseY,250,60);
    textSize(25)
    fill(0)
    text("score "+score ,800,50)

   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   bird.display();
   slingshot.display();
   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

