var caixa;

function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    caixa.x -=5;
  }
  if(keyDown(RIGHT_ARROW)){
    caixa.x +=5;
  }
  if(keyDown(UP_ARROW)){
    caixa.y -=5;
  }
  if(keyDown(DOWN_ARROW)){
    caixa.y +=5;
  }





  drawSprites();
}




