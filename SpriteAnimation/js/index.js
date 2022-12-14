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
window.onload = () => {
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

    // facts about deforestation
    const facts = [
        {
            fact: "We lose around 10 million hectares of forest every single year",
        },
        {
            fact: "Beef is responsible for 41% of global deforestation",
        },
        {
            fact: "Deforestation Contributes about 4.8 Billion Tonnes of Carbon Dioxide A Year",
        },
        {
            fact: "Deforestation Has Turned the Amazon Rainforest into a Carbon Source",
        },
    ];

    let factIndex = 0;

    // canvas, its width and height
    let canvas = document.getElementById("animationArea");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;

    // cnavas context
    let ctx = canvas.getContext("2d");

    // the charatcer drawn
    let character = new Image();
    character.src = "../images/character.png";

    character.onload = () => {
        // animation frame
        setInterval(draw, 100);

        // draw canvas text
        setInterval(drawText, 3000);
    };

    // update the frame of the sprite
    const updateFrame = () => {
        curFrame = ++curFrame % frameCount;
        srcX = curFrame * width;
        ctx.clearRect(x, y, width, height);
    };

    // calling update and drawing the sprite
    const draw = () => {
        updateFrame();
        ctx.drawImage(
            character,
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

    // draw the speech bubble for the charatcer
    const drawBubble = () => {
        ctx.save(); // save current state
        ctx.scale(1.8, 0.5);
        bubbleHelper(200, 550, 150);
        ctx.restore(); // restore previous context state
        bubbleHelper(200, 380, 20);
        bubbleHelper(220, 410, 10);
    };

    // helper function to draw bubbles for DRY
    const bubbleHelper = (x, y, r) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "azure";
        ctx.fill();
    };

    // function to draw the text onto the canvas
    const drawText = () => {
        // speech bubble
        ctx.clearRect(50, 200, 400, 250);
        // draw bubbles
        drawBubble();

        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText(facts[factIndex].fact, 350, 275);
        if (factIndex === 3) {
            factIndex = 0;
        } else {
            factIndex++;
        }
        console.log(factIndex);
    };
};
