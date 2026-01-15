"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#87ceeb");
    drawEllipse(50,50,80,80,175,175,175);
    drawEllipse(70,120,100,100,100,100,100);
    drawEllipse(90,180,120,120,30,45,60);
}
function drawEllipse(x,y,w,h,r,g,b){
    push();
    noStroke();
    fill(r,g,b);
    ellipse(x,y,w,h);
    pop()
}