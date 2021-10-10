function intro (){
background(130, 136, 150)
imageMode(CENTER)
image(introbg,width/2,height/2,width-800,height-100)


textSize(25)
fill("yellow")
text("Help the astronaut to survive from the aliens attack! ", width/2 -250,height/2 -100)
text("Collect clouds and planets to score orion points!", width/2 -250, height/2 -50)
text("Use <> to move", width/2 -100,height/2+100)


                                        
if (mousePressedOver(start)){
    sasound.play()
    start.visible=false

    gamestate=1
}
}