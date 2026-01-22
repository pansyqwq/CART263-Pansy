"use strict";

let r,g,b;

function setup() {
    createCanvas(800, 800);
    changeColor();
}
function draw(){
    background("#2b2b2b");
    loopHorizontal(25,25,50);
}

function loopHorizontal(x, y, r){
    for(let i =0; i <= 9; i++){
        for(let j = 0; j <= 9; j++){
        fill(r,g,b);
        ellipse(x+ 50*i,y +50*j,r);
        }
    }
}

function changeColor(){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
}

function keyPressed(){
    if (key == ' '){
        changeColor();
    }
}