"use strict";

let cartoon = {
    canvas: undefined,
    canvasContext: undefined,
};

cartoon.start = () => {
    cartoon.canvas = document.getElementById("myCanvas");
    cartoon.canvasContext = cartoon.canvas.getContext("2d");
    cartoon.mainLoop();
};

document.addEventListener("DOMContentLoaded", cartoon.start);

cartoon.mainLoop = () => {
    cartoon.drawSun();
    for (let i = 0; i < 5; i++) {
        cartoon.drawCloud(i * 130, 130 * i);
    }
    cartoon.drawLand();
    for (let i = 0; i < 5; ++i) {
        cartoon.drawMountain(i * 170);
    }
    cartoon.writeCaption();
    cartoon.drawHouse();
    for (let i = 0; i < 3; ++i) {
        cartoon.drawAppleTree(i * 100);
    }
    for (let i = 0; i < 3; ++i) {
        cartoon.drawAppleTree(475 + i * 100);
    }
    for (let i = 0; i < 115; ++i) {
        cartoon.drawGrass(7 * i, (i + 1) * 7);
    }
};

/* 
    Object function to draw a sun
*/
cartoon.drawSun = () => {
    let ctx = cartoon.canvasContext;

    // draw sun
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 100, 0, 0.5 * Math.PI);
    ctx.strokeStyle = "#FF9900";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    // draw sun rays
    ctx.moveTo(10, 110);
    ctx.lineTo(20, 150);
    ctx.moveTo(35, 110);
    ctx.lineTo(50, 140);
    ctx.moveTo(60, 100);
    ctx.lineTo(80, 130);
    ctx.moveTo(80, 80);
    ctx.lineTo(100, 110);
    ctx.stroke();
    ctx.closePath();
};

/* 
    Object function to draw a cloud
*/
cartoon.drawCloud = (xBegin, x) => {
    let ctx = cartoon.canvasContext;

    // draw cloud
    ctx.beginPath();
    ctx.moveTo(xBegin + 100, 80);
    ctx.bezierCurveTo(100 + x, 100, 130 + x, 110, 150 + x, 90);
    ctx.bezierCurveTo(180 + x, 120, 200 + x, 130, 230 + x, 90);
    ctx.bezierCurveTo(250 + x, 80, 270 + x, 50, 230 + x, 30);
    ctx.bezierCurveTo(220 + x, 5, 170 + x, 5, 150 + x, 25);
    ctx.bezierCurveTo(150 + x, 30, 120 + x, 10, 100 + x, 80);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#8ED6FF";
    ctx.fill();
    ctx.strokeStyle = "#0100ff";
    ctx.stroke();
};

/* 
    Draw land
*/
cartoon.drawLand = () => {
    let ctx = cartoon.canvasContext;

    // draw a rectangle to represent land
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(800, 500);
    ctx.lineTo(800, 600);
    ctx.lineTo(0, 600);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.fillStyle = "#633003";
    ctx.fill();
    ctx.strokeStyle = "#7F4511";
    ctx.stroke();
};

/* 
    Draw a single blade of grass
*/
cartoon.drawGrass = (xBegin, x) => {
    let ctx = cartoon.canvasContext;

    // draw grass
    ctx.beginPath();
    ctx.moveTo(xBegin, 520);
    ctx.lineTo(x - 5, 470);
    ctx.lineTo(x, 520);
    ctx.lineTo(xBegin, 520);
    ctx.closePath();
    ctx.fillStyle = "#00E658";
    ctx.fill();
    ctx.strokeStyle = "#02722E";
    ctx.stroke();
};

/* 
    Draw a house
*/
cartoon.drawHouse = () => {
    let ctx = cartoon.canvasContext;

    // draw outline of the house
    ctx.beginPath();
    ctx.moveTo(300, 350);
    ctx.lineTo(500, 350);
    ctx.lineTo(500, 500);
    ctx.lineTo(300, 500);
    ctx.lineTo(300, 350);
    ctx.lineTo(400, 250);
    ctx.lineTo(500, 350);
    ctx.closePath();
    ctx.fillStyle = "#F75846";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // draw attic window
    ctx.beginPath();
    ctx.rect(375, 300, 50, 40);
    // draw window lines
    ctx.moveTo(400, 300);
    ctx.lineTo(400, 340);
    ctx.moveTo(375, 320);
    ctx.lineTo(425, 320);
    ctx.closePath();
    ctx.fillStyle = "azure";
    ctx.fill();
    ctx.stroke();

    // draw door
    ctx.beginPath();
    ctx.moveTo(375, 500);
    ctx.lineTo(375, 425);
    ctx.arc(400, 425, 25, 1 * Math.PI, 0);
    ctx.lineTo(425, 500);
    ctx.lineTo(375, 500);
    ctx.closePath();
    ctx.fillStyle = "#F9B277";
    ctx.fill();
    ctx.stroke();

    // draw doornob
    ctx.beginPath();
    ctx.arc(415, 450, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#FFD13D";
    ctx.fill();
    ctx.stroke();

    // draw house windows
    ctx.beginPath();
    ctx.rect(320, 400, 40, 60);
    ctx.rect(440, 400, 40, 60);
    // draw window lines
    ctx.moveTo(340, 400);
    ctx.lineTo(340, 460);
    ctx.moveTo(320, 430);
    ctx.lineTo(360, 430);
    ctx.moveTo(460, 400);
    ctx.lineTo(460, 460);
    ctx.moveTo(440, 430);
    ctx.lineTo(480, 430);
    ctx.closePath();
    ctx.fillStyle = "azure";
    ctx.fill();
    ctx.stroke();
};

/* 
    Draw an apple tree
*/
cartoon.drawAppleTree = (x) => {
    let ctx = cartoon.canvasContext;

    // draw tree stem
    ctx.beginPath();
    ctx.rect(50 + x, 375, 40, 125);
    ctx.closePath();
    ctx.fillStyle = "#A35C1D";
    ctx.fill();
    ctx.strokeStyle = "#773800";
    ctx.stroke();

    // draw tree top
    ctx.beginPath();
    ctx.moveTo(10 + x, 375);
    ctx.bezierCurveTo(20 + x, 400, 50 + x, 410, 50 + x, 380);
    ctx.bezierCurveTo(60 + x, 410, 90 + x, 420, 110 + x, 380);
    ctx.bezierCurveTo(140 + x, 370, 175 + x, 300, 110 + x, 300);
    ctx.bezierCurveTo(90 + x, 275, 55 + x, 280, 50 + x, 300);
    ctx.bezierCurveTo(47 + x, 310, 5 + x, 320, 10 + x, 355);
    ctx.closePath();
    ctx.fillStyle = "#3AEE3B";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1DA31E";
    ctx.stroke();
};

/* 
    Draw a mountain
*/
cartoon.drawMountain = (x) => {
    let ctx = cartoon.canvasContext;

    // draw mountain
    ctx.beginPath();
    ctx.moveTo(-50 + x, 500);
    ctx.lineTo(70 + x, 150);
    ctx.lineTo(140 + x, 225);
    ctx.lineTo(190 + x, 190);
    ctx.lineTo(290 + x, 500);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "#909290";
    ctx.fill();
    ctx.strokeStyle = "#505250";
    ctx.stroke();

    // draw snow caps on mountain
    ctx.beginPath();
    ctx.moveTo(70 + x, 150);
    ctx.lineTo(140 + x, 225);
    ctx.lineTo(190 + x, 190);
    ctx.lineTo(200 + x, 230);
    ctx.lineTo(170 + x, 250);
    ctx.lineTo(145 + x, 300);
    ctx.lineTo(57 + x, 190);
    ctx.closePath();
    ctx.fillStyle = "azure";
    ctx.fill();
    ctx.strokeStyle = "#C3C5C3";
    ctx.stroke();
};

/* 
    Writes the caption of the cartoon onto the canvas
*/
cartoon.writeCaption = () => {
    let ctx = cartoon.canvasContext;

    // write text
    ctx.font = "18px Courier New";
    ctx.strokeText("Author: Yifeng Zheng", 10, 550);
    ctx.font = "14px Courier New";
    ctx.lineWidth = 1;
    ctx.strokeText(
        `Ancient mountains brood, dominating the landscape, with majestic face... ~ Shadow Hamilton`,
        10,
        580
    );
};