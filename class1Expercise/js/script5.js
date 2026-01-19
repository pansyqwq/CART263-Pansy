"use strict";
let counter = 0;

let squareData = {
    x: 25,
    y: 25,
    w: 50,
    h: 50,
    fill: "#f0a85cff",
}

let squareData2 = {
    x: 90,
    y: 25,
    w: 50,
    h: 50,
    fill: "#f0755cff",
}
let circleData = {
    radious: 0,
    fill: "#bebebe4a"
}
/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#2b2b2b");
    displaySquare();
    displaySquare2();
    mouseHover();
    drawEllipse();
    console.log(counter);
}

function displaySquare() {
    push();
    noStroke();
    fill(squareData.fill);
    rect(squareData.x, squareData.y, squareData.w, squareData.h);
    pop();
}

function displaySquare2() {
    push();
    noStroke();
    fill(squareData2.fill);
    rect(squareData2.x, squareData2.y, squareData2.w, squareData2.h);
    pop();
}

function drawEllipse() {
    noStroke();
    fill(circleData.fill);

    let i = 0;
    while(i < counter){
         ellipse(width / 2, height / 2, circleData.radious + i*25);
         i++;
    }
}

function mouseHover() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        squareData.fill = "#f3e8b0ff";
    } else {
        squareData.fill = "#f0a85cff";
    }

    if (mouseX >= 90 && mouseX <= 140 && mouseY >= 25 && mouseY <= 75) {
        squareData2.fill = "#f3bdb0ff";
    } else {
        squareData2.fill = "#f0755cff";
    }

}

function mousePressed() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        if (counter <= 9) {
            counter += 1;
        }
    } else if (mouseX >= 90 && mouseX <= 140 && mouseY >= 25 && mouseY <= 75){
        if (counter > 0) {
            counter -= 1;
        }
    }
}


