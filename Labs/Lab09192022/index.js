"use strict";

let fruitArray =
    '[{"strawberry": "15","peach": "15","banana": "25","pear": "10","grape": "20"}]';
let colors = ["red", "orange", "yellow", "green", "blue"];

// array used to store json objects
let fruits = [];

// event object
let barChart = {
    canvas: undefined,
    canvasContext: undefined,
};
// function to parse the data
barChart.parseData = (json) => {
    let data = JSON.parse(json)[0];
    for (const [key, value] of Object.entries(data)) {
        fruits.push({
            name: key,
            quantity: parseInt(value, 10),
            color: colors.pop(),
        });
    }
};

barChart.start = () => {
    barChart.canvas = document.getElementById("myCanvas");
    barChart.canvasContext = barChart.canvas.getContext("2d");
    barChart.mainLoop();
};

document.addEventListener("DOMContentLoaded", barChart.start);

barChart.mainLoop = () => {
    // parse data to fruits array
    barChart.parseData(fruitArray);
    barChart.drawGrid();
    barChart.writeText();
    barChart.drawBars();
};

barChart.drawGrid = () => {
    let ctx = barChart.canvasContext;

    // draw y lines, each line is 130px apart from each other
    ctx.beginPath();
    for (let i = 0; i < 6; ++i) {
        ctx.moveTo(100 + i * 130, 50);
        ctx.lineTo(100 + i * 130, 520);
    }
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // draw x lines
    ctx.beginPath();
    for (let i = 0; i < 26; ++i) {
        ctx.moveTo(90, 50 + i * 18);
        ctx.lineTo(780, 50 + i * 18);
    }
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
};

barChart.writeText = () => {
    let ctx = barChart.canvasContext;
    // title of chart
    ctx.font = "24px Courier New";
    ctx.strokeText("Fruit Quantity Chart", 280, 30);
    // quantity : y axis of chart 25 is 50 px, 0 is 503
    for (let i = 0; i < 26; ++i) {
        ctx.font = "15px Courier New";
        ctx.strokeText(25 - i, 70, 53 + i * 18);
    }

    // name of fruit
    for (let i = 0; i < 5; ++i) {
        ctx.font = "18px Courier New";
        ctx.strokeText(fruits[i].name, i * 140 + 110, 525);
    }
};

barChart.drawBars = () => {
    let ctx = barChart.canvasContext;

    // draw bars of fruits

    for (let i = 0; i < fruits.length; ++i) {
        ctx.beginPath();
        ctx.moveTo(165 + i * 130, 500);
        ctx.lineTo(165 + i * 130, 500 - fruits[i].quantity * 18);
        ctx.closePath();
        ctx.lineWidth = 100;
        ctx.strokeStyle = fruits[i].color;
        ctx.stroke();
    }
};
