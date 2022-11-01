"use strict";
// button functions

// start speech recognition and cancel speech synthesis
const startSpeech = () => {
    console.log("start speech");
    speechSynthesis.cancel();
    speechRec.start();
};

// cancel speech recognition and speech sysnthesis
const stopSpeech = () => {
    console.log("end speech");
    speechSynthesis.cancel();
    speechRec.stop();
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
let speechColor = "black";
let speechRadius = 25;

// function to draw a circle
const drawCircle = (radius = RADIUS, color = COLOR) => {
    ctx.clearRect(0, 0, 600, 600);
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
//const SpeechGrammarList =    window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// function for speech sysnthesis
const playText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.speed = 1;
    speechSynthesis.speak(utterance);
};

// instantiate a speechrecogniton object and declare the properties of the object
const speechRec = new SpeechRecognition();
speechRec.continuous = false;
speechRec.lang = "en-US";
speechRec.interimResults = false;
speechRec.maxAlternatives = 1;

// when user stops speaking
speechRec.onspeechend = () => {
    speechRec.stop();
};

// when there is a speech result
speechRec.onresult = (event) => {
    // make an array from the return event by nest-mapping to retrieve the transcript and joining
    let text = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)[0]
        .split(" ");

    // if text.length equals 2 because ["color", "A COLOR"].length = 2 and ['size", "A SIZE"].length = 2
    if (text.length === 2 && text.includes("color")) {
        // check if text[1] is a number after parsing
        if (typeof parseInt(text[1]) === Number) {
            playText("Please say a valid color");
        }
        // no errors, set color to text[1]
        else {
            speechColor = text[1];
        }
    } else if (text.length === 2 && text.includes("size")) {
        // if the size if greater than 300
        if (parseInt(text[1]) > 300) {
            playText("Size limit 300");
        }
        // if size is less than 1
        else if (parseInt(text[1]) < 1) {
            playText("Size too small, the minimum size is 1");
        }
        // if size is not a number
        else if (Number.isNaN(parseInt(text[1]))) {
            playText("Please say a integer value");
        }
        // else set the speechRadius to text[1]
        else {
            speechRadius = parseInt(text[1]);
        }
    }
    // "HELP" and other errors
    else {
        playText(HELP);
    }
    drawCircle(speechRadius, speechColor);
};

drawCircle();
