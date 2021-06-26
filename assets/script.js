// variables
var body = document.body;
var main = body.children[1];
var ul = body.children[1].children[3]
var li1 = body.children[1].children[3].children[0];
var li2 = body.children[1].children[3].children[1];
var li3 = body.children[1].children[3].children[2];
var li4 = body.children[1].children[3].children[3];
var result = body.children[1].children[4];
var form = body.children[1].children[5].children[0];
var subBtn = body.children[1].children[5].children[1];
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
    quizAttr();
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

function quizAttr() {
    btn1 = document.createElement("button");
    btn2 = document.createElement("button");
    btn3 = document.createElement("button");
    btn4 = document.createElement("button");

    li1.appendChild(btn1);
    li2.appendChild(btn2);
    li3.appendChild(btn3);
    li4.appendChild(btn4);

    li1.setAttribute("style", "display:block;");
    li2.setAttribute("style", "display:block;")
    li3.setAttribute("style", "display:block;")
    li4.setAttribute("style", "display:block;")

    main.setAttribute("style", "text-align:left; margin-left:35rem")

    btn1.setAttribute("style", "color:white; background-color:blueviolet; padding: 10px; border-radius: 10px; border-color:white;");
    btn2.setAttribute("style", "color:white; background-color:blueviolet; padding: 10px; border-radius: 10px; border-color:white;");
    btn3.setAttribute("style", "color:white; background-color:blueviolet; padding: 10px; border-radius: 10px; border-color:white;");
    btn4.setAttribute("style", "color:white; background-color:blueviolet; padding: 10px; border-radius: 10px; border-color:white;");
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
    result.style.display = 'inline';
    result.textContent = "Wrong!";
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns1);
    btn2.removeEventListener("click", wrgAns1);
    btn3.removeEventListener("click", crtAns1);
    btn4.removeEventListener("click", wrgAns1);
    question2();
}     

function crtAns1() {
    result.style.display = 'inline';
    result.textContent = "Correct!";
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
    result.style.display = 'inline';
    result.textContent = "Wrong!";
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns2);
    btn2.removeEventListener("click", crtAns2);
    btn3.removeEventListener("click", wrgAns2);
    btn4.removeEventListener("click", wrgAns2);
    question3();
}

function crtAns2() {
    result.style.display = 'inline';
    result.textContent = "Correct!";
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
    result.style.display = 'inline';
    result.textContent = "Wrong!";
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns3);
    btn2.removeEventListener("click", wrgAns3);
    btn3.removeEventListener("click", wrgAns3);
    btn4.removeEventListener("click", crtAns3);
    question4();
}

function crtAns3() {
    result.style.display = 'inline';
    result.textContent = "Correct!";
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
    result.style.display = 'inline';
    result.textContent = "Wrong!";
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns4);
    btn2.removeEventListener("click", wrgAns4);
    btn3.removeEventListener("click", crtAns4);
    btn4.removeEventListener("click", wrgAns4);
    question5();
}

function crtAns4() {
    result.style.display = 'inline';
    result.textContent = "Correct!";
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
    result.style.display = 'inline';
    result.textContent = "Wrong!";
    timerCount = timerCount - 10;
    btn1.removeEventListener("click", wrgAns5);
    btn2.removeEventListener("click", wrgAns5);
    btn3.removeEventListener("click", wrgAns5);
    btn4.removeEventListener("click", crtAns5);
    quizOver();
}

function crtAns5() {
    result.style.display = 'inline';
    result.textContent = "Correct!";
    btn1.removeEventListener("click", wrgAns5);
    btn2.removeEventListener("click", wrgAns5);
    btn3.removeEventListener("click", wrgAns5);
    btn4.removeEventListener("click", crtAns5);
    quizOver();
}

function quizOver() {
    clearInterval(timer);
    result.style.display = 'none';
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    subBtn.style.display = 'inline';
    instructions.style.display = 'inline';
    form.style.display = 'inline';
    score.textContent = timerCount;
    instructions.textContent = "Your final score is " + timerCount + ".";
    question.textContent = "All done!";

}

startBtn.addEventListener("click", startQuiz);