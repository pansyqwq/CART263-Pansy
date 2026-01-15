"use strict";

let dataSquare = {
    x:0,
    y:0,
    fill:{
        r:0,
        g:20,
        b:175
    }
}
let dataSquare2 = {
    y:0,
    fill:{
        r:20,
        g:0,
        b:120
    }
}

let dataSquare3 = {
    y:0,
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
    rect(dataSquare.x,dataSquare.y, width/3, height);
    pop()
}

function drawSquare2(){
    push();
    noStroke();
    fill(dataSquare2.fill.r,dataSquare2.fill.g,dataSquare2.fill.b);
    rect(width/3, dataSquare2.y, width/3, height);
    pop()
}

function drawSquare3(){
    push();
    noStroke();
    fill(dataSquare3.fill.r,dataSquare3.fill.g,dataSquare3.fill.b);
    rect(width/3 *2, dataSquare3.y, width/3, height);
    pop()
}

// function mousePressed(){
//     if (mousePressed){
//     dataSquare.x = mouseX;
//     dataSquare.y = mouseY;
//     }
// }

// function keyPressed(){
//     if (key == ' '){ //this means space bar
//     dataSquare2.x = mouseX;
//     dataSquare2.y = mouseY;
//   }  
// }