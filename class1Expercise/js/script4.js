"use strict";

let dataSquare = {
    x:0,
    y:0,
    fill:{
        r:27,
        g:227,
        b:184
    }
}
let dataSquare2 = {
    y:0,
    fill:{
        r:27,
        g:210,
        b:227
    }
}

let dataSquare3 = {
    y:0,
    fill:{
        r:27,
        g:67,
        b:227
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
    hover();
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

function hover(){
if (mouseX >= 0 && mouseX <= width/3){
    dataSquare.fill.r = 255;
    dataSquare.fill.g = 255;
    dataSquare.fill.b = 255;
} else {
    dataSquare.fill.r = 27;
    dataSquare.fill.g = 227;
    dataSquare.fill.b = 184;
}



if (mouseX >= width/3 && mouseX <= width/3*2){
    dataSquare2.fill.r = 255;
    dataSquare2.fill.g = 255;
    dataSquare2.fill.b = 255;
} else {
    dataSquare2.fill.r = 27;
    dataSquare2.fill.g = 210;
    dataSquare2.fill.b = 227;
}

if (mouseX >= width/3*2 && mouseX <= width){
    dataSquare3.fill.r = 255;
    dataSquare3.fill.g = 255;
    dataSquare3.fill.b = 255;
} else {
    dataSquare3.fill.r = 27;
    dataSquare3.fill.g = 67;
    dataSquare3.fill.b = 227;
}
}

