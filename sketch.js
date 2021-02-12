var gameState=0;
var key;

function preload(){
    bgImage=loadImage('house1.jpg')
    bg=loadImage('bg.jpg')
    play=loadImage('play.png')

    boyr=loadAnimation('b1.png','b2.png','b3.png','b4.png','b5.png','b6.png')
    boyl=loadAnimation('b1l.png','b2l.png','b3l.png','b4l.png','b5l.png','b6l.png')
    boyS=loadImage('b3.png')
    keyimg = loadImage('key.png')
    choco= loadImage('chocolate.jpg')
   
}
function setup(){
    createCanvas(1200,600)
    greeting1=createElement('h1')
    greeting2=createElement('h1')
    playbutton = createSprite(600,400,90,90)

    greeting3 = createElement('h3')
    greeting4= createElement('h3')
    boy=createSprite(600,120,10,10);
    boy.addImage('walking',boyS)
    boy.scale=0.4

    InvisibleGround1=createSprite(590,595,width,10)
    InvisibleGround2=createSprite(250,360,width/3+30,10)
    InvisibleGround3=createSprite(750,360,width/3+30,10)
    InvisibleGround4=createSprite(720,130,width/4+30,5)
    InvisibleGround1.visible=false
    InvisibleGround2.visible=false
    InvisibleGround3.visible=false
    InvisibleGround4.visible=false
    key1= createSprite(800,110,50,50)
    key1.addImage(keyimg)
    key1.scale=0.15
    key1.visible = false

    key2= createSprite(800,330,50,50)
    key2.addImage(keyimg)
    key2.scale=0.15
    key2.visible = false
    key3= createSprite(200,330,50,50)
    key3.addImage(keyimg)
    key3.scale=0.15
    key3.visible = false
    key4= createSprite(800,570,50,50)
    key4.addImage(keyimg)
    key4.scale=0.15
    key4.visible = false
    key5= createSprite(300,570,50,50)
    key5.addImage(keyimg)
    key5.scale=0.15
    key5.visible = false

    q1 = createElement('h1')
    q2= createElement('h1')
    q3  = createElement('h1')
    q4 = createElement('h1')
    q5 = createElement('h1')

    q1.hide()
    q2.hide()
    q3.hide()
    q4.hide()
    q5.hide()


    a1 = createInput('')
    a2 = createInput('')
    a3 = createInput('')
    a4 = createInput('')
    a5 = createInput('')

    a1.hide()
    a2.hide()
    a3.hide()
    a4.hide()
    a5.hide()

    submit=createButton('submit')
    submit.hide()

    w1= createElement('h1')
    w1.hide()
    
}
function draw(){
    if(gameState==0){
        background(bg)
        greeting1.html('Welcome to Escape Room')
        greeting1.style('color:white')
        greeting1.position(400,90)

        greeting2.html('Ready for an adventure? <br>Help boy find the golden key and escape the house ')
        greeting2.style('color:white')
        greeting2.position(400,190)

        playbutton.addImage(play)
        playbutton.scale=0.5

        //to start game
        if(mousePressedOver(playbutton)){
            gameState=1;
            playbutton.visible=false
            greeting1.hide()
            greeting2.hide()
        }

    }
    else if(gameState==1){
        background(bgImage)
        greeting3.html('Solve all 5 questions to unlock the golden key')
        greeting3.style('color:white')
        greeting3.position(50,50)
            key =0
        greeting4.html('Keys unlocked : '+key)
        greeting4.style('color:white')
        greeting4.position(90,80)

        if(keyDown('LEFT_ARROW')){
            boy.x=boy.x-5;
            boy.addAnimation('walking',boyl)
        }
        if(keyDown('RIGHT_ARROW')){
            boy.x=boy.x+5;
            boy.addAnimation('walking',boyr)
        }
    
        if(keyDown('space') ){
            boy.velocityY-=1;
            
        }
        boy.velocityY=boy.velocityY+0.8
        boy.collide(InvisibleGround1)
        boy.collide(InvisibleGround2)
        boy.collide(InvisibleGround3)
        boy.collide(InvisibleGround4)

        key1.visible=true
        //question1
        if(boy.isTouching(key1)){
            q1.show()
           q1.html('Q1. Unscramble the word given below')
           q1.style('color:white')
           q1.position(300,200)
           image(choco,500,300,250,150)
           a1.show()
           a1.position(500,500)
           ans1=a1.value()
            submit.position(500,550)
            submit.show()
            submit.mousePressed(()=>{
                if(ans1=="CHOCOLATES"||ans1=="chocolates"){
                    submit.hide()
                    a1.hide()
                    q1.hide()

                    q2.show()
                }

                else{
                    gamestate=3
                }
            })
        }

        //question2
    
            
    
    }
    else if(gameState==3){
        background(bg)
        w1.show()
        w1.html('Wrong Answer, Try Again next time!!')
        w1.position(500,200)
        playbutton.addImage(play)
        playbutton.scale=0.5
        playbutton.visible=true;
             //to start game
             if(mousePressedOver(playbutton)){
                gameState=1;
                playbutton.visible=false
                greeting1.hide()
                greeting2.hide()
                w1.hide()
            }

    }
    drawSprites()
}