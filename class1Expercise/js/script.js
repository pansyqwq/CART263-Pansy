"use strict";

let dataEllipse = {
    x:50,
    y:50,
    w:80,
    h:80,
    color:"#800000",

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
function drawEllipse(){
    push();
    noStroke();
    fill(dataEllipse.fill.r,dataEllipse.fill.g, dataEllipse.fill.b);
    ellipse(dataEllipse.x,dataEllipse.y,dataEllipse.w,dataEllipse.h);
    pop();

    push()
    fill(dataEllipse.color);
    ellipse(dataEllipse.x+20,dataEllipse.y+80,dataEllipse.w+40,dataEllipse.h+50);
    pop()

    push()
    fill(dataEllipse.color);
    ellipse(dataEllipse.x+60,dataEllipse.y+120,dataEllipse.w+10,dataEllipse.h+150);
    pop()

}