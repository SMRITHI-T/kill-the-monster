var Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload() {
//preload the images here
//mback=loadImage("GamingBackground.png");
nback=loadImage("GamingBackground.jpg");
//monsterImage=loadImage("Monster-01.png");
//monster2=loadImage("Monster-02.png");
//monster=loadImage("monster.png");

}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;
ground=new Ground(750,750,1500,20);
hero=new Hero(200,400,150);
monster=new Monster(1200,400,150);
slingshot = new Fly(hero.body,{x: 200,y:400})
  //row 1
box1=new Box(700,750);
box2=new Box(700,700);
box3=new Box(700,650);
box4=new Box(700,600);
box5=new Box(700,550);
box6=new Box(700,500);
box7=new Box(700,450);
box8=new Box(700,400);
box9=new Box(700,350);
box10=new Box(700,300);
//row 2
box11=new Box(800,750);
box12=new Box(800,700);
box13=new Box(800,650);
box14=new Box(800,600);
box15=new Box(800,550);
box16=new Box(800,500);
box17=new Box(800,450);
box18=new Box(800,400);
box19=new Box(800,350);
//row 3
box20=new Box(900,750);
box21=new Box(900,700);
box22=new Box(900,650);
box23=new Box(900,600);
box24=new Box(900,550);
box25=new Box(900,500);
box26=new Box(900,450);
box27=new Box(900,400);
//row 4
box28=new Box(1000,750);
box29=new Box(1000,700);
box30=new Box(1000,650);
box31=new Box(1000,600);
box32=new Box(1000,550);
box33=new Box(1000,500);
box34=new Box(1000,450);


}

function draw() {
  background(nback);
  Engine.update(engine);
ground.display();
//if (hero.position.x=700-1000&&hero.position.y=750-300){
//monster.position=
//}

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
hero.display();
monster.display();

slingshot.display();
}    
    
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(hero);
  }
}