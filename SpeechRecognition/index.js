"use strict";
// button functions
const startSpeech = () => {
    console.log("start speech");
};

const stopSpeech = () => {
    console.log("end speech");
};

// default vlaues
const COLOR = "black";
const RADIUS = 25;

// error messages
const SIZE_MAX = "Size size limit 300";
const SIZE_MIN = "Size too small, the minimun size is 1";
const HELP =
    "Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle.";

// get canvas and set canvas context
const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// set canvas dimensions
canvas.width = 600;
canvas.height = 600;
canvas.style.width = 600;
canvas.style.height = 600;

// variables to store speech recognition values
let speechColor = "";
let speechRadius = 25;

// function to draw a circle
const drawCircle = (radius = RADIUS, color = COLOR) => {
    ctx.beginPath();
    ctx.arc(300, 300, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
};

// set up speech recogniton
const SpeechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
/*  const SpeechGrammarList =
        window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const SpeechRecognitionEvent =
        window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent; */

const speechRec = new SpeechRecognition();
speechRec.continuous = false;
speechRec.lang = "en-US";
speechRec.interimResults = false;
speechRec.maxAlternatives = 1;

// when user stops speaking

// when there is a speech result

drawCircle();
