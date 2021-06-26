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
    timerCount = 60;
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
    btn1.addEventListener("click", wrgAns1);
    btn2.addEventListener("click", wrgAns1);
    btn3.addEventListener("click", crtAns1);
    btn4.addEventListener("click", wrgAns1);

    question.textContent = "Commonly used data types DO NOT include:"
    btn1.textContent = "Strings";
    btn2.textContent = "Arrays";
    btn3.textContent = "Alerts";
    btn4.textContent = "Booleans";
}

function wrgAns1() {
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns1);
    btn2.removeEventListener("click", wrgAns1);
    btn3.removeEventListener("click", crtAns1);
    btn4.removeEventListener("click", wrgAns1);
    question2();
}     

function crtAns1() {
    btn1.removeEventListener("click", wrgAns1);
    btn2.removeEventListener("click", wrgAns1);
    btn3.removeEventListener("click", crtAns1);
    btn4.removeEventListener("click", wrgAns1);
    question2();
}

function question2() {
    btn1.addEventListener("click", wrgAns2);
    btn2.addEventListener("click", crtAns2);
    btn3.addEventListener("click", wrgAns2);
    btn4.addEventListener("click", wrgAns2);

    question.textContent = "The condition in an if/else statement is inclosed with:"
    btn1.textContent = "Quotes";
    btn2.textContent = "Curly Brackets";
    btn3.textContent = "Parentheses";
    btn4.textContent = "Square Brackets";
}

function wrgAns2() {
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns2);
    btn2.removeEventListener("click", crtAns2);
    btn3.removeEventListener("click", wrgAns2);
    btn4.removeEventListener("click", wrgAns2);
    question3();
}

function crtAns2() {
    btn1.removeEventListener("click", wrgAns2);
    btn2.removeEventListener("click", crtAns2);
    btn3.removeEventListener("click", wrgAns2);
    btn4.removeEventListener("click", wrgAns2);
    question3();
}

function question3() {
    btn1.addEventListener("click", wrgAns3);
    btn2.addEventListener("click", wrgAns3);
    btn3.addEventListener("click", wrgAns3);
    btn4.addEventListener("click", crtAns3);

    question.textContent = "Arrays in JavaScript can be used to store:"
    btn1.textContent = "Numbers and Strings";
    btn2.textContent = "Other arrays";
    btn3.textContent = "Booleans";
    btn4.textContent = "All of the above";
}

function wrgAns3() {
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns3);
    btn2.removeEventListener("click", wrgAns3);
    btn3.removeEventListener("click", wrgAns3);
    btn4.removeEventListener("click", crtAns3);
    question4();
}

function crtAns3() {
    btn1.removeEventListener("click", wrgAns3);
    btn2.removeEventListener("click", wrgAns3);
    btn3.removeEventListener("click", wrgAns3);
    btn4.removeEventListener("click", crtAns3);
    question4();
}

function question4() {
    btn1.addEventListener("click", wrgAns4);
    btn2.addEventListener("click", wrgAns4);
    btn3.addEventListener("click", crtAns4);
    btn4.addEventListener("click", wrgAns4);

    question.textContent = "String values need to be enclosed in:"
    btn1.textContent = "Commas";
    btn2.textContent = "Curly brackets";
    btn3.textContent = "Quotes";
    btn4.textContent = "Parentheses";
}

function wrgAns4() {
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns4);
    btn2.removeEventListener("click", wrgAns4);
    btn3.removeEventListener("click", crtAns4);
    btn4.removeEventListener("click", wrgAns4);
    question5();
}

function crtAns4() {
    btn1.removeEventListener("click", wrgAns4);
    btn2.removeEventListener("click", wrgAns4);
    btn3.removeEventListener("click", crtAns4);
    btn4.removeEventListener("click", wrgAns4);
    question5();
}

function question5() {
    btn1.addEventListener("click", wrgAns5);
    btn2.addEventListener("click", wrgAns5);
    btn3.addEventListener("click", wrgAns5);
    btn4.addEventListener("click", crtAns5);

    question.textContent = "What tool is used to print content to the debugger:"
    btn1.textContent = "JavaScript";
    btn2.textContent = "Terminal";
    btn3.textContent = "For loops";
    btn4.textContent = "Console.log";
}

function wrgAns5() {
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns5);
    btn2.removeEventListener("click", wrgAns5);
    btn3.removeEventListener("click", wrgAns5);
    btn4.removeEventListener("click", crtAns5);
    quizOver();
}

function crtAns5() {
    btn1.removeEventListener("click", wrgAns5);
    btn2.removeEventListener("click", wrgAns5);
    btn3.removeEventListener("click", wrgAns5);
    btn4.removeEventListener("click", crtAns5);
    quizOver();
}

function quizOver() {
    clearInterval(timer);
    score.textContent = timerCount;
    question.textContent = "Your score is " + timerCount;
}

startBtn.addEventListener("click", startQuiz);