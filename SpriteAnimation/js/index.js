/* "use strict";

// width and height for canvas
const canvasWidth = 800;
const canvasHeight = 600;

// width and height of the sprite sheet
const spriteWidth = 864;
const spriteHeight = 280;

// rows and columns in sprite sheet
const rows = 2;
const cols = 8;

// width and height of single sprite
const width = spriteWidth / cols;
const height = spriteHeight / rows;

// index of current frame
let currFrame = 0;

// totol frame count
const frameCount = 8;

// x and y coordinates to draw sprite
let x = 100;
let y = 400;

// x and y coordinates in sprite sheet
let srcX = 0;
let srcY = 0;

// canvas object
let animation = {
    canvas: undefined,
    ctx: undefined,
    sprite: undefined,
};

animation.start = () => {
    animation.canvas = document.getElementById("animationArea");
    animation.canvas.width = canvasWidth;
    animation.canvas.height = canvasHeight;
    animation.ctx = animation.canvas.getContext("2d");

    animation.sprite = new Image();
    animation.sprite.src = "../images/character.png";

    animation.sprite.onload = () => {
        window.requestAnimationFrame(animation.mainLoop);
    };
};

document.addEventListener("DOMContentLoaded", animation.start);

animation.mainLoop = (timestamp) => {
    console.log("In Main Loop");
    animation.draw();

    window.requestAnimationFrame(animation.mainLoop);
};

animation.updateFrame = () => {
    // update frame
    currFrame = ++currFrame % frameCount;

    // update source x on spritesheet
    srcX = currFrame * width;

    // clear sprite drawn before rerendering
    animation.ctx.clearRect(x, y, width, height);
};

animation.draw = () => {
    animation.updateFrame();

    animation.ctx.drawImage(
        animation.sprite,
        srcX,
        srcY,
        width,
        height,
        x,
        y,
        width,
        height
    );
};
 */
// canvas width and height
const canvasWidth = 800;
const canvasHeight = 600;

// sprite width and height
const spriteWidth = 864;
const spriteHeight = 280;

// rows and columns
const rows = 2;
const cols = 8;

// width and height of sprite
const width = spriteWidth / cols;
const height = spriteHeight / rows;

// current frame index and total frame count
let curFrame = 0;
let frameCount = 8;

// starting location
let x = 200;
let y = 450;

// sprite x and y
let srcX;
let srcY = 0;

// canvas, its width and height
let canvas = document.getElementById("animationArea");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// cnavas context
let ctx = canvas.getContext("2d");

// the charatcer drawn
let character = new Image();
character.src = "../images/character.png";

// update the frame of the sprite
const updateFrame = () => {
    curFrame = ++curFrame % frameCount;
    srcX = curFrame * width;
    ctx.clearRect(x, y, width, height);
};

// calling update and drawing the sprite
const draw = () => {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
};

const drawBubble = () => {
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "azure";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 380, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "azure";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(220, 410, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "azure";
    ctx.fill();
};

// animation frame
setInterval(draw, 100);

drawBubble();
