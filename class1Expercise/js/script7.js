"use strict";

let r,g,b;
let state = true;
let cellRadius = 100;

function setup() {
    createCanvas(800, 800);
    changeColor();
}
function draw(){
    background("#2b2b2b");
    loopHorizontal(25,25,50);
}

function loopHorizontal(x, y, w){
    for(let i =0; i <= 9; i++){
        for(let j = 0; j <= 9; j++){
        fill(r,g,b);
        if(state === true){
          ellipse(x+ 50*i,y +50*2*j,w);
          let number_row = (2*j) +1;
          square(50*i,50*number_row,w);
        } 
        
        else if (state === false){
          square(50*i,50*2*j,w);
          let number_row = (2*j) +1;
          ellipse(x+50*i,y+50*number_row,w);
        }
        console.log(state);
        console.log(j);
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
function mouseClicked(){
    if (state === true){
        state = false
    } else {
        state = true;
    }
}