//[[]]
//sans fight
//=====>https://www.youtube.com/watch?v=wDgQdr8ZkTw<======mEgALovEaNIa
//{
var sansfont = createFont("Comic Sans MS");
var hp_Font = createFont("Arial Bold");

var soulAngle = 0;
var soulX = 200;
var soulY = 300;
var hp = 92;
//{
var soul1 = function(x,y){
noStroke();
fill(255, 0, 0);
rect(x+1,y-5,5,3);
rect(x+8.5,y-5,5,3);
rect(x,y-2,15,2);
rect(x,y,15,3);
rect(x+2,y+3,11,3);
rect(x+5,y+6,5,3);
};
//}

draw = function() {
 
 background(0, 0, 0);
 rotate(soulAngle);
 soul1(soulX,soulY);
 
 if (keyIsPressed && keyCode === UP) {
        soulY -= 2;
    }
 if (keyIsPressed && keyCode === DOWN) {
        soulY ++;
    }
 if (keyIsPressed && keyCode === LEFT) {
        soulX--;
    }
 if (keyIsPressed && keyCode === RIGHT) {
        soulX ++;
    }    
    if (keyIsPressed && keyCode === UP && keyCode === RIGHT) {
        soulY --;
        soulX ++;
    }
 if (keyIsPressed && keyCode === DOWN) {
        soulY ++;
    }
 if (keyIsPressed && keyCode === LEFT) {
        soulX--;
    }
 if (keyIsPressed && keyCode === RIGHT) {
        soulX ++;
    }    
    fill(225, 255, 0);
    textFont(hp_Font);
    textSize(111);
    text(hp,30,330);
};
//}
