var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var astronaut,al1,al2,al3,bullet,cloudimg,astro,cloudgroup,ground,alien1,alien2,alien3,b1,score,astroleft,gamebg,introbg,stbutton,start,gamestate,bulletgrp;
  var goversound,sasound,gg,g1,playagainb,p1,sound,onb,offb,soundon,soundoff,wow;

function preload(){
astronaut = loadAnimation ("as1.png","as2.png","as3.png","as4.png","as5.png","as6.png")
al1 = loadImage("alien 1.png")
al2 = loadImage("aliens 2.png")
al3 = loadImage("aliens3.png")
bullet = loadImage("bullets.png")
cloudimg = loadImage("clouds.png")
night = loadImage("n.jpg")
astroleft = loadAnimation("las 1.png","las 2.png","las 3.png","las 4.png","las 5.png","las 6.png")
gamebg= loadSound("game bg sound 1.mp3")
introbg= loadImage("screen.png")
stbutton=loadImage("stt.png")
goversound= loadSound("gameover.wav")
sasound= loadSound("sr.wav")
gg= loadImage("gover.png")
playagainb= loadImage("pl2.png")
sound= loadSound("bulletsound.mp3")
onb=loadImage("musicp.png")
offb=loadImage("nomup.png")
wow=loadImage("astr8.png")

}






function setup (){
 createCanvas(windowWidth,1000)

 soundon = createSprite(width/2-700,20)
 soundon.addImage("u",onb)
 soundon.scale=0.1



 g1=createSprite(width/2,height/2,100,100)
 g1.scale=0.4
g1.addImage("t",gg)
 g1.visible=false

 p1=createSprite(width/2 -10,230,100,100)
 p1.addImage("0",playagainb)
 p1.visible=false

 start = createSprite(width/2,height/2,50,50)
start.addImage("startb",stbutton)
start.scale = 0.4

 gamestate = 0

 score = 0

 cloudgroup=new Group();
 bulletgrp=new Group ();

 bgsky=createSprite(width/2,height/2,width,height)
 imageMode(CENTER)
  bgsky.addImage("n",night)
  bgsky.scale= 4
  bgsky.velocityX = -2
  console.log(windowHeight)
  bgsky.visible=false
 
  
 
  astro = createSprite(width/2,height/2,50,50)
  astro.addAnimation("righta",astronaut)
  astro.addAnimation("lefta", astroleft)
  astro.scale = 0.2
  astro.visible=false
 
  ground=createSprite(width/2,height-400,width,30)
  ground.visible=false

  alien1 = createSprite(50,width/2,50,50)
  alien1.addImage("a",al1)
  alien1.scale= 0.2
  alien1.visible=false
 
  alien2=createSprite(width-50,height-20,45,45)
  alien2.addImage("s",al2)
  alien2.scale= 0.5
  alien2.visible=false






 
 gamebg.loop()

 

}

function draw(){
background(255)

if(mousePressedOver(soundon)){
  soundon.visible=false
  gamebg.stop()
  sound.stop()
  sasound.stop()

  soundoff = createSprite(width/2-700,20)
  soundoff.addImage("qq",offb)
  soundoff.scale=0.09
}





if (gamestate===0){
  intro()
}

else if (gamestate===1){
  
  
  astro.visible=true
  alien1.visible=true
  alien2.visible=true
  bgsky.visible=true

  
 

  spawnclouds();
  bullets();
bullets2();

if (cloudgroup.isTouching(astro)){
  cloudgroup.destroyEach()
  
  score+=20
}



if(frameCount%100===0){
alien1.x=random(-10,75)
alien1.y= random(10,height-100)
sound.play()
}


if(frameCount%100===0){
  alien2.x=random(width-100,width)
  alien2.y= random(10,height-100)
  sound.play()
  }

  if (bgsky.x<0){
    bgsky.x = width+100
    }
    
    
    
    if (keyDown(UP_ARROW)){
    astro.y=astro.y-19
    }
     
    
    if(keyDown(RIGHT_ARROW)){
      astro.x = astro.x+12
      astro.changeAnimation("righta",astronaut)
    
    }
    
    if(keyDown(DOWN_ARROW)){
      astro.y = astro.y+19
    }
    
    if(keyDown(LEFT_ARROW)){
      astro.x = astro.x-12
      astro.changeAnimation("lefta",astroleft)
    }

    if (astro.isTouching(bulletgrp)){
      goversound.play()
      gamestate=2

    }  



}

else if(gamestate===2){
  astro.visible=false
  endgame()
}





//astro.collide(ground)






drawSprites();

fill("yellow")
textSize(28)
text("Orion points:" + score, width/2 -100,20 )
}

function bullets(){
  if(frameCount%100===0 || frameCount%130===0){
    var b1 = createSprite(alien1.x,alien1.y,50,50)
    b1.addImage("b",bullet)
    b1.scale= 0.07
    b1.lifetime= width/12 +100
    b1.velocityX= 50
    b1.velocityY= random(-3,8)
    bulletgrp.add(b1)

  }
 
}

function bullets2 (){
  if(frameCount%80===0 || frameCount%100===0){
    var b2 = createSprite(alien2.x,alien2.y,50,50)
    b2.addImage("c",bullet)
    b2.lifetime=width/12+100
    b2.scale=0.07
    b2.velocityX=-50
    b2.velocityY= random(5,-5)
    bulletgrp.add(b2)
  }
}


function spawnclouds(){
  if (frameCount%90===0){
 //var cloud = createSprite(-10,random(50,height/2),20,30)
 

  var rand = Math.round(random(1,2))
  if (rand===1){
  var cloud = createSprite(-10,random(50,height-600),20,30)
  cloud.addImage(cloudimg)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  cloud.velocityX= random(3,6)
  cloudgroup.add(cloud)
  }

  if (rand===2){
    var cloud = createSprite(width+10,random(50,height-600),20,30)
    cloud.addImage(cloudimg)
    cloud.velocityX=random(-3,-5)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  
    cloudgroup.add(cloud)
  }
  }
  
  
}

