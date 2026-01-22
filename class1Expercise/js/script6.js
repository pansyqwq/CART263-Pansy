"use strict";

function setup() {
    createCanvas(800, 800);
}
function draw(){
    background("#2b2b2b");
    loopHorizontal(0,20,50);
    loopVertical(15,20,70);
    displayText();
}

function loopHorizontal(n, x, y){
    for(let i =0; i <= 9; i++){
        fill("#ffffff");
        text(n, x, y);
        x += 20;
        n++;

    }
}

function loopVertical(n, x, y){
    for(let i = 15; i >= 1; i--){
        fill("#ffffff");
        text(n, x, y);
        y += 20;
        n--;
        console.log (n)
    }
}



function displayText(){
    textSize(20);
    fill("#fffffff");
    textAlign(CENTER);
    text("test", 800/2, 400/2);
}