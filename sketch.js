function preload(){
  
  BackgroundI=loadImage("Hot Air Ballon-01.png")
  b1=loadImage("Hot Air Ballon-02.png")
 //JakeI=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");//
 // JakeI=loadImage("Jake1.png");
}
 
var db
var fetch,b1S
function setup() {
  createCanvas(800,400);
  Background=createSprite(400,200,50,50)
  Background.addImage(BackgroundI)
   
  b1S=createSprite(200,200,50,50)
  b1S.addImage(b1)
  b1S.scale=0.5;
    db= firebase.database();
   fetch=db.ref('Ballon/Position');
  fetch.on("value",read,shwErr)
  console.log(fetch);
}
var x;
function draw() {
  //background(255,255,255);  
  drawSprites();
  if(keyDown("left_arrow"))
  {  console.log("hi")
    write(-10,0);

  }
  if(keyDown("right_arrow"))
  {console.log("hi");
     write(10,0);

  }
}

function read(data) {
    x=data.val();
   console.log(x);
   b1S.x=x.x;
   b1S.y=x.y;
  
}
function shwErr() {
    console.log("error");
  
}
function write(z,y) {
  console.log(x)
  console.log(z)
  fetch.set({
    'x' :x.x+z,
    'y' : x.y+y
  })
  
 
}