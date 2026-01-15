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
let dataSquare2 = {
    x:80,
    y:100,
    w:80,
    fill:{
        r:170,
        g:44,
        b:22
    }
}

let dataSquare3 = {
    x:200,
    y:20,
    w:80,
    fill:{
        r:22,
        g:44,
        b:90
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
    drawSquare3();
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
    fill(dataSquare2.fill.r,dataSquare2.fill.g,dataSquare2.fill.b);
    square(dataSquare2.x, dataSquare2.y, dataSquare2.w);
    pop()
}

function drawSquare3(){
    push();
    noStroke();
    fill(dataSquare3.fill.r,dataSquare3.fill.g,dataSquare3.fill.b);
    square(dataSquare3.x, dataSquare3.y, dataSquare3.w);
    if(dataSquare3.y >= 400){
        dataSquare3.y = 0;
    } else  {dataSquare3.y += 2;}
    pop()
}

function mousePressed(){
    if (mousePressed){
    dataSquare.x = mouseX;
    dataSquare.y = mouseY;
    }
}

function keyPressed(){
    if (key == ' '){ //this means space bar
    dataSquare2.x = mouseX;
    dataSquare2.y = mouseY;
  }  
}