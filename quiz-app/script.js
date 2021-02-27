const quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        b: '<js>',
        c: '<javascript>',
        d: '<scripting>',
        correct: 'a'
    }, {
        question: 'JavaScript is a ____-side programming language.',
        a: 'Client',
        b: 'Server',
        c: 'Both',
        d: 'None',
        correct: 'c'
    }, {
        question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        a: 'alertBox(“Hello DataFlair!”);',
        b: 'alert(Hello DataFlair!);',
        c: 'msgAlert(“Hello DataFlair!”);',
        d: 'alert(“Hello DataFlair!”);',
        correct: 'd'
    }, {
        question: 'How do you find the minimum of x and y using JavaScript?',
        a: 'min(x,y);',
        b: 'Math.min(x,y);',
        c: 'Math.min(xy);',
        d: 'min(xy);',
        correct: 'b'
    }, {
        question: 'Which are the correct "if" statements to execute certain code if “x” is equal to 2?',
        a: 'if(x 2)',
        b: 'if(x = 2)',
        c: 'if(x == 2)',
        d: 'if(x != 2 )',
        correct: 'c'
    }
]

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert("Great job! You have completed the quiz.");
        }
    }
}) // 1:11:52