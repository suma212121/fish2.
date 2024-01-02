var waterbk;
var f1,f2,f3,f4
var fisherman
var goodfish,badfish
var food=0
var score=0

function preload(){
waterbk=loadImage("bg.gif")
f1=loadImage("fish1.png")
f2=loadImage("fish2.png")
f3=loadImage("fish3.png")
f4=loadImage("fish4.png")
b1=loadImage("b1.png")
b2=loadImage("b2.png")
b3=loadImage("b3.png")
fm=loadImage("fisherman.png")
collected=loadSound("collected.mp3")
chomp=loadSound("chomp.mp3")


}

function setup(){
createCanvas(1400,585)
//w1=createSprite(650,400,480,600)
//w1.addAnimation("water",waterbk)
//w1.scale=2.7

fisherman=createSprite(400,290,100,100)
fisherman.addImage(fm)
fisherman.scale=1.5

fisherman.setCollider("rectangle",30,30,30,200)
fisherman.debug=false

goodfish=new Group()
badfish=new Group()
}

function draw(){
background("white")
image (waterbk,0,0,width,height)
if (keyDown("space")&& goodfish.isTouching(fisherman)){
    goodfish.destroyEach()
    collected.play()
    food=food+5
}

else if (keyDown("space") && badfish.isTouching(fisherman)){
    chomp.play()
    food=food-3
    badfish.destroyEach()
}

spawnFish();
spawnShark();
drawSprites();

textSize(20)
text("Fish: "+food,1000,50)

if (score<=0){
    textSize()
    text("Game Over")
}
}



function spawnFish(){
    if (frameCount%60===0){
    var fish=createSprite(1000,random(350,700),20,20)
    fish.velocityX= -8
    var r1=Math.round(random(1,4))
    switch(r1){
        case 1:fish.addImage(f1)
        break
        case 2:fish.addImage(f2)
        break
        case 3:fish.addImage(f3)
        break
        case 4:fish.addImage(f4)
        break
        default:break
    }
    fish.scale=0.3
   // fish.lifetime=800
   goodfish.add(fish)
}

}

function spawnShark(){
    if(frameCount%100===0){
        var shark=createSprite(1100,random(300,650),20,20)
        shark.velocityX=-8
        var r1=Math.round(random(1,3))
        switch(r1){
            case 1: shark.addImage(b1)
            break
            case 2: shark.addImage(b2)
            break
            case 3: shark.addImage(b3)
            break
            default:break
        }
        shark.scale=0.3
        badfish.add(shark)

    }
}