"use strict";

// image width: 867, height: 798;
// canvas object
let animation = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined,
};

const imgWidth = 289;
const imgHeight = 266;
const sw = 175;
const sh = 175;

// start function to store object properties and call main loop
animation.start = () => {
    animation.canvas = document.getElementById("animationArea");
    animation.canvas.width = 800;
    animation.canvas.height = 600;
    animation.canvasContext = animation.canvas.getContext("2d");

    animation.mainLoop();
};

document.addEventListener("DOMContentLoaded", animation.start);

animation.mainLoop = () => {
    console.log("Starting Loop");
    let ctx = animation.canvasContext;

    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

    animation.sprite = new Image();
    animation.sprite.onload = () => {
        ctx.drawImage(
            animation.sprite,
            300,
            0,
            imgWidth,
            imgHeight,
            100,
            100,
            sw,
            sh
        );
    };
    animation.sprite.src = "../images/spritesheet.png";
};
