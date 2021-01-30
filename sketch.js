const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var player, player2;
var engine,world;
var marble;
var groundImg;
var circle, sling, stone, stone2, ellipse,sling2;
var ground;

function preload(){
  groundImg=loadImage("ground.jpg");
 }

function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=engine.world;

  stone = new Stone(100,380);
  stone2 = new Stone(870,390);
  sling = new Sling(stone.body,{x:100,y:380});
  sling2 = new Sling(stone2.body,{x:870,y:390});
  ground = new Ground(500,790,1000,20);
  marble = new Marble(500,400);
  marble2 = new Marble(580,280);
  marble3 = new Marble(370,290);
  marble4 = new Marble(370,400);
  marble5 = new Marble(590,500);
  marble6 = new Marble(420,530);
  marble7 = new Marble(670,370);
  marble8 = new Marble(470,190);
  marble9 = new Marble(520,590);
  marble10 = new Marble(330,460);
  marble11 = new Marble(630,560);
  marble12 = new Marble(580,400);
  marble13 = new Marble(510,520);
  marble14 = new Marble(680,460);
  marble15 = new Marble(500,470);
  marble16 = new Marble(300,340);
  marble17 = new Marble(590,190);
  marble18 = new Marble(670,280);
  marble19 = new Marble(380,560);
  marble20 = new Marble(640,340);
}

function draw() {
  background(groundImg); 
  Engine.update(engine);
  

  fill(84,65,50);
  ellipse(500,400,500,500);

  text("MouseX:"+mouseX,800,50);
  text("MouseY:"+mouseY,800,100);                     


marble.display();
marble2.display();
marble3.display();
marble4.display();
marble5.display();
marble6.display();
marble7.display();
marble8.display();
marble9.display();
marble10.display();
marble11.display();
marble12.display();
marble13.display();
marble14.display();
marble15.display();
marble16.display();
marble17.display();
marble18.display();
marble19.display();
marble20.display();
fill("blue");
stone.display();
fill("green");
stone2.display();
sling.display();
sling2.display();
ground.display();
  drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    sling.fly();
}



