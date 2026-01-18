"use strict";
let counter = 0;

let squareData = {
    x: 25,
    y: 25,
    w: 50,
    h: 50,
    fill: "#f0a85cff",
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
    mouseHover();
    console.log(counter);
}

function displaySquare() {
    push();
    noStroke();
    fill(squareData.fill);
    rect(squareData.x, squareData.y, squareData.w, squareData.h);
    pop();
}

function mouseHover() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        squareData.fill = "#f3e8b0ff";
    } else {
        squareData.fill = "#f0a85cff";
    }
}

function mousePressed() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        if (counter <= 9) {
            counter += 1;
        }
    }
}
