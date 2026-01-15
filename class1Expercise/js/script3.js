"use strict";

let dataSquare = {
    x:50,
    y:50,
    w:80,


    fill:{
        r:175,
        g:175,
        b:175
    }
}
/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#87ceeb");
    drawSquare1();
    drawSquare2();
}
function drawSquare1(){
    push();
    noStroke();
    fill(dataSquare.fill.r,dataSquare.fill.g,dataSquare.fill.b);
    square(dataSquare.x, dataSquare.y, dataSquare.w);
    pop()
}

function drawSquare2(){
    push();
    noStroke();
    fill(dataSquare.fill.r,dataSquare.fill.g,dataSquare.fill.b);
    square(dataSquare.x, dataSquare.y, dataSquare.w);
    pop()
}

function mousePressed(){
    if (mousePressed){
    dataSquare.x = mouseX;
    dataSquare.y = mouseY;
    }
}
