// variables
var body = document.body;
var score = document.querySelector(".timer");
var question = document.querySelector(".head");
var instructions = document.querySelector(".instructions");
var startBtn = document.querySelector(".start-button");

var timer;
var timerCount;
var btn1;
var btn2;
var btn3;
var btn4;

// function init() {
    // getHS();
// }

function startQuiz() {
    timerCount = 61;
    startBtn.style.display = 'none';
    instructions.style.display = 'none'
    answerBtns();
    question1();
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        score.textContent = timerCount;
        if(timerCount < 0) {
            quizOver();
            clearInterval(score);
        }
    }, 1000);
}

function answerBtns() {
    btn1 = document.createElement("button");
    btn2 = document.createElement("button");
    btn3 = document.createElement("button");
    btn4 = document.createElement("button");

    body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(btn3);
    body.appendChild(btn4);
}

function question1() {
    btn1.addEventListener("click", chkAns1);
    btn2.addEventListener("click", chkAns1);
    btn3.addEventListener("click", chkAns1);
    btn4.addEventListener("click", chkAns1);

    question.textContent = "Commonly used data types DO NOT include:"
    btn1.textContent = "Strings";
    btn2.textContent = "Arrays";
    btn3.textContent = "Alerts";
    btn4.textContent = "Booleans";
}

function chkAns1() {
    if(btn3 === true) {
        question2();
    } else {
        timerCount = timerCount - 10;
        question2();
    }
}

function question2() {
    btn1.addEventListener("click", chkAns2);
    btn2.addEventListener("click", chkAns2);
    btn3.addEventListener("click", chkAns2);
    btn4.addEventListener("click", chkAns2);

    question.textContent = "The condition in an if/else statement is inclosed with:"
    btn1.textContent = "Quotes";
    btn2.textContent = "Curly Brackets";
    btn3.textContent = "Parentheses";
    btn4.textContent = "Square Brackets";
}

function chkAns2() {
    if(btn2 === true) {
        quizOver();
    } else {
        timerCount = timerCount - 10;
        quizOver();
    }
}

function quizOver() {
    question.textContent = "Your score is " + timerCount;
}

startBtn.addEventListener("click", startQuiz);