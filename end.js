function endgame(){
    g1.visible=true
    p1.visible=true
    background(130,136,150)
    
    
   
    //image(gg,width/2,height/2)
    astro.visible=false
    alien1.visible=false
    alien2.visible=false
    bgsky.visible=false
    bulletgrp.destroyEach()
    cloudgroup.destroyEach()
    textSize(25)
    fill("black")
    //text("GAME OVER",width/2,height/2)

    if(mousePressedOver(p1)){
        sasound.play()
        score=0
     gamestate=0
     p1.x=width-1000
     g1.x=width-1000
    p1.visible=false
    g1.visible=false
    start.visible=true
    

    }
}