const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var rect1;
var margin1 , margin2 , margin3 , margin4 ;
//var plinko1 , plinko2 , plinko3 , plinko4 , plinko5 , plinko6 , plinko7 , plinko8 ;
var   division1  , division2  , division3  , division4 ,  division5  , division6  , division7  , division8 


function setup() {
 var canvas = createCanvas(2304,1080);
 engine = Engine.create();
 world = engine.world;


 margin1 = new Margin(922+240,140,500,5);
 margin2 = new Margin(922+240,800+140,500,5);
 margin3 = new Margin(912,140+400,5,805);
 margin4 = new Margin(932+240+240,140+400,5,805);

 division1 = new Division(922+240,130+800,495,15);
 division2 = new Division(920,785,10,300);
 division3 = new Division(920,785,10,300);
 division4 = new Division(1000,785,10,300);
 division5 = new Division(1080,785,10,300);
 division6 = new Division(1160,785,10,300);
 division7 = new Division(1240,785,10,300);
 division8 = new Division(1320,785,10,300);
 division9 = new Division(1405,785,10,300);

 for (var j = 950; j<=width; j=j+50){
 // plinko.push(new Plinko(j,75));
}
 
}

function draw() {

background(255,255,255);  
  
  fill(rgb(55,255,5));
  rect1 = rect(912,140,500,800);

  
 
 margin1.display();
 margin2.display();
 margin3.display();
 margin4.display();


division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
division8.display();
division9.display();
division1.display();


}
