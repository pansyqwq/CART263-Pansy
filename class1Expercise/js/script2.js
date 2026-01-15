"use strict";

let dataEllipse = {
    x:50,
    y:50,
    w:80,
    h:80,

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
    drawEllipse();
}
function drawEllipse(x,y,w,h,r,g,b){
    push();
    noStroke();
    fill(175,175,175);
    ellipse(50,50,80,80);
    pop();

    push()
    fill(dataEllipse.fill.r-75,dataEllipse.fill.g-75, dataEllipse.fill.b-75);
    ellipse(dataEllipse.x+20,dataEllipse.y+80,dataEllipse.w+40,dataEllipse.h+50);
    pop()

    push()
    fill(dataEllipse.fill.r-125,dataEllipse.fill.g-125, dataEllipse.fill.b-125);
    ellipse(dataEllipse.x+60,dataEllipse.y+120,dataEllipse.w+10,dataEllipse.h+150);
    pop()

}