var starImg,bgImg;
var star, starBody,fairy,fairyBody;
//create variable for fairy sprite and fairyImg
var fairyI1,fairyI2,fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyI1 = loadAnimation("fairyImage1.png","fairyImage2.png")
	fairy2 = loadImage("fairy.png")
	fairySound = loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairySound.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite (50,520);
	// fairy.addImage(fairy2)
	fairy.addAnimation("flying",fairyI1)
	fairy.scale = 0.15


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairyBody = Bodies.rectangle(50,650,50,50,{isStatic:true})
	World.add(world, fairyBody);
	
	Engine.run(engine);
	// star.debug = true

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

//   fairy.x = fairyBody.position.x
//   fairy.y = fairyBody.position.y

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}
	
}
