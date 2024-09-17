const questionArray = [
    {
        q: "What is the capital of India?",
        o: ["New Delhi", "Bombay", "Hyderabad", "Chennai"],
        a: "New Delhi"
    },
    {
        q: "Who wrote the national anthem of India?",
        o: ["Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        a: "Rabindranath Tagore"
    },
    {
        q: "What is the national animal of India?",
        o: ["Tiger", "Elephant", "Peacock", "Lion"],
        a: "Tiger"
    },
    {
        q: "Which is the largest state in India by area?",
        o: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
        a: "Rajasthan"
    },
    {
        q: "Who was the first Prime Minister of India?",
        o: ["Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad", "Sardar Patel"],
        a: "Jawaharlal Nehru"
    },
    {
        q: "Which of these rivers is the longest in India?",
        o: ["Ganga", "Brahmaputra", "Yamuna", "Godavari"],
        a: "Ganga"
    },
    {
        q: "What is the national flower of India?",
        o: ["Lotus", "Rose", "Sunflower", "Lily"],
        a: "Lotus"
    },
    {
        q: "Which city is known as the 'Silicon Valley of India'?",
        o: ["Bangalore", "Mumbai", "Hyderabad", "Chennai"],
        a: "Bangalore"
    }
];

const question = document.getElementsByClassName('question')[0];
const option1 = document.getElementsByClassName('option1')[0];
const option2 = document.getElementsByClassName('option2')[0];
const option3 = document.getElementsByClassName('option3')[0];
const option4 = document.getElementsByClassName('option4')[0];
const timer = document.getElementsByClassName('timer')[0];
const res = document.getElementsByClassName('res')[0];
const start = document.getElementsByClassName('start')[0];
const questionBox = document.getElementById('question_box');

let correctCount = 0;
let answer;
let clicked = false;

function addEventListener(option) {
    option.addEventListener('click',()=>{
        if(!clicked && option.innerText === answer){
            option.classList.add("green");
            correctCount++;
        }else if(!clicked && option.innerText !== answer){
            option.classList.add("red");

        }
        clicked=true;
        
    })
}


function refreshOptionColor() {
    option1.classList.remove("green");
    option2.classList.remove("green");
    option3.classList.remove("green");
    option4.classList.remove("green");
    option1.classList.remove("red");
    option2.classList.remove("red");
    option3.classList.remove("red");
    option4.classList.remove("red");
}

addEventListener(option1);
addEventListener(option2);
addEventListener(option3);
addEventListener(option4);

function generateUniqueRandomNumbers(min, max) {
    let randomNumbers = new Set();
    
    while (randomNumbers.size < 5) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
}


function changeQuestion(index){
    question.innerText = questionArray[index].q;
    
}

function changeOptions(index){
    option1.innerText = questionArray[index].o[0];
    option2.innerText = questionArray[index].o[1];
    option3.innerText = questionArray[index].o[2];
    option4.innerText = questionArray[index].o[3];
    
}

function startTimer () { 
    let i=0;
    const interval = setInterval(()=>{
        if(i>=5){
            window.clearInterval(interval);
            timer.innerText=0;
            return;
        }
        i++;
        timer.innerText = i;
    },1000)
}

function change(index){
    answer = questionArray[index].a;
    clicked=false;
    refreshOptionColor();
    changeQuestion(index);
    changeOptions(index);
    startTimer();
}


function startTheQuiz(){
    questionBox.classList.remove("hide")
    let i = 0;
    const arrayOfRandomNumbers = generateUniqueRandomNumbers(0,7);
    const interval = setInterval(()=>{
        if(i>=5){
            res.classList.add("result")
            res.innerText = `Your score is ${correctCount}`
            questionBox.classList.add("hide")
            window.clearInterval(interval);
            return;
        }
        change(arrayOfRandomNumbers[i]);
        i++;
    },6000);
    
}

start.addEventListener('click',()=>{
    start.classList.add("hide")
    startTheQuiz();    
})