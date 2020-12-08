var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos= database.ref('ball/position');
    ballpos.on("value",readf,Errorf);
}

function draw(){
    background("white");
    if(pos!==undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    /*ball.x = ball.x + x;
    ball.y = ball.y + y;*/
    database.ref('ball/position').set({
        'x': pos.x+x,
        'y': pos.y+y
    })
}

function readf(data){
    pos=data.val();
    ball.x=pos.x
    ball.y=pos.y
}

function Errorf(){
    console.log("gg")
}