document.addEventListener("DOMContentLoaded", function() {
    const lettersContainer = document.querySelector(".letters-container");
    const letterImage = document.getElementById("letterImage");
    const imageName = document.getElementById("imageName");

    // Alphabet images mapping
    const alphabetImages = {
        A: { name: "Apple 🍎", url: "https://i.postimg.cc/YjzcVNfj/apple.jpg" },
        B: { name: "Ball ⚽", url: "https://i.postimg.cc/vc8Rd13h/ball.jpg" },
        C: { name: "Cat 🐱", url: "https://i.postimg.cc/mtmvZbns/cat.jpg" },
        D: { name: "Dog 🐶", url: "https://i.postimg.cc/Z0StVsN1/dog.jpg" },
        E: { name: "Elephant 🐘", url: "https://i.postimg.cc/cv6Vrpq8/elephant.jpg" },
        F: { name: "Fish 🐠", url: "https://i.postimg.cc/HrKF56Hv/fish.jpg" },
        G: { name: "Giraffe 🦒", url: "https://i.postimg.cc/f39pvYRz/giraffe.jpg" },
        H: { name: "House 🏠", url: "https://i.postimg.cc/KkhVp41n/house.jpg" },
        I: { name: "Ice Cream 🍦", url: "https://i.postimg.cc/5Y5rh1zD/icecream.jpg" },
        J: { name: "Jug 🏺", url: "https://i.postimg.cc/rR8HcbCs/jug.jpg" },
        K: { name: "Kite 🪁", url: "https://i.postimg.cc/grdQvXFp/kite.jpg" },
        L: { name: "Lion 🦁", url: "https://i.postimg.cc/Z0cgjb4d/lion.jpg" },
        M: { name: "Monkey 🐵", url: "https://i.postimg.cc/D8pNkxWf/monkey.jpg" },
        N: { name: "Nest 🏡", url: "https://i.postimg.cc/w7jrGCjb/nest.jpg" },
        O: { name: "Orange 🍊", url: "https://i.postimg.cc/18gj9D6G/orange.jpg" },
        P: { name: "Parrot 🦜", url: "https://i.postimg.cc/w1Sb33cS/parrot.jpg" },
        Q: { name: "Queen 👑", url: "https://i.postimg.cc/XZd153sX/queen.jpg" },
        R: { name: "Rabbit 🐰", url: "https://i.postimg.cc/phB00CbH/rabbit.jpg" },
        S: { name: "Sun ☀️", url: "https://i.postimg.cc/HcmZ4KNz/sun.jpg" },
        T: { name: "Tiger 🐯", url: "https://i.postimg.cc/rRFf74Mt/tiger.jpg" },
        U: { name: "Umbrella ☔", url: "https://i.postimg.cc/0r8XzTD2/umbrella.jpg" },
        V: { name: "Violin 🎻", url: "https://i.postimg.cc/w30fLwQ5/violin.jpg" },
        W: { name: "Watch ⌚", url: "https://i.postimg.cc/qzqmL21P/watch.jpg" },
        X: { name: "Xylophone 🎶", url: "https://i.postimg.cc/Why5ftKh/xylophone.jpg" },
        Y: { name: "Yacht ⛵", url: "https://i.postimg.cc/68GMstJz/yacht.jpg" },
        Z: { name: "Zebra 🦓", url: "https://i.postimg.cc/B89M4kJ3/zebra.jpg" }
    };

       alphabet.forEach(letter => {
        const letterDiv = document.createElement("div");
        letterDiv.classList.add("letter");
        letterDiv.innerText = letter;
        letterDiv.addEventListener("click", () => showLetterImage(letter));

        lettersContainer.appendChild(letterDiv);
    });

    function showLetterImage(letter) {
        imageName.innerText = `You tapped: ${letter}`;
        imageName.classList.add("pop");
        setTimeout(() => imageName.classList.remove("pop"), 500);
    }
});

// Quiz Data
let quizData = [
    { letter: 'A', correct: 'Apple 🍎', incorrect: 'Ball ⚽' },
    { letter: 'B', correct: 'Ball ⚽', incorrect: 'Cat 🐱' },
    { letter: 'C', correct: 'Cat 🐱', incorrect: 'Dog 🐶' },
    { letter: 'D', correct: 'Dog 🐶', incorrect: 'Elephant 🐘' },
    { letter: 'E', correct: 'Elephant 🐘', incorrect: 'Fish 🐠' },
    { letter: 'F', correct: 'Fish 🐠', incorrect: 'Giraffe 🦒' },
    { letter: 'G', correct: 'Giraffe 🦒', incorrect: 'House 🏠' },
    { letter: 'H', correct: 'House 🏠', incorrect: 'Ice Cream 🍦' },
    { letter: 'I', correct: 'Ice Cream 🍦', incorrect: 'Jug 🏺' },
    { letter: 'J', correct: 'Jug 🏺', incorrect: 'Kite 🪁' },
    { letter: 'K', correct: 'Kite 🪁', incorrect: 'Lion 🦁' },
    { letter: 'L', correct: 'Lion 🦁', incorrect: 'Monkey 🐵' },
    { letter: 'M', correct: 'Monkey 🐵', incorrect: 'Nest 🏡' },
    { letter: 'N', correct: 'Nest 🏡', incorrect: 'Orange 🍊' },
    { letter: 'O', correct: 'Orange 🍊', incorrect: 'Parrot 🦜' },
    { letter: 'P', correct: 'Parrot 🦜', incorrect: 'Queen 👑' },
    { letter: 'Q', correct: 'Queen 👑', incorrect: 'Rabbit 🐰' },
    { letter: 'R', correct: 'Rabbit 🐰', incorrect: 'Sun ☀️' },
    { letter: 'S', correct: 'Sun ☀️', incorrect: 'Tiger 🐯' },
    { letter: 'T', correct: 'Tiger 🐯', incorrect: 'Umbrella ☔' },
    { letter: 'U', correct: 'Umbrella ☔', incorrect: 'Violin 🎻' },
    { letter: 'V', correct: 'Violin 🎻', incorrect: 'Watch ⌚' },
    { letter: 'W', correct: 'Watch ⌚', incorrect: 'Xylophone 🎶' },
    { letter: 'X', correct: 'Xylophone 🎶', incorrect: 'Yacht ⛵' },
    { letter: 'Y', correct: 'Yacht ⛵', incorrect: 'Zebra 🦓' },
    { letter: 'Z', correct: 'Zebra 🦓', incorrect: 'Apple 🍎' }
];


let currentQuestion = 0;

// Load Question
function loadQuestion() {
    document.getElementById("quizLetter").innerText = quizData[currentQuestion].letter;
    let options = document.querySelectorAll(".option");
    options[0].innerText = quizData[currentQuestion].correct;
    options[1].innerText = quizData[currentQuestion].incorrect;
}

// Check Answer
function checkAnswer(isCorrect, button) {
    if (isCorrect) {
        button.classList.add("correct");
        showGlitter();
        showStar();
        document.getElementById("feedback").innerText = '✅ Correct!';
    } else {
        button.classList.add("incorrect");
        document.getElementById("feedback").innerText = '❌ Try Again!';
    }
}

// Show Glitter Snowfall Effect
function showGlitter() {
    for (let i = 0; i < 30; i++) {
        let glitter = document.createElement("div");
        glitter.classList.add("glitter");
        glitter.style.left = Math.random() * 100 + "vw";
        glitter.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(glitter);
        setTimeout(() => glitter.remove(), 3000);
    }
}

// Show Star Reward
function showStar() {
    let star = document.createElement("div");
    star.innerHTML = "🌟";
    star.style.position = "fixed";
    star.style.top = "50%";
    star.style.left = "50%";
    star.style.fontSize = "15vw";
    star.style.transform = "translate(-50%, -50%)";
    star.style.opacity = "1";
    star.style.transition = "opacity 2s ease-out";
    document.body.appendChild(star);
    setTimeout(() => star.style.opacity = "0", 1000);
    setTimeout(() => star.remove(), 2000);
}

// Next Question
function nextQuestion() {
    if (++currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert('🎉 Quiz Completed!');
    }
}

// Load First Question on Page Load
window.onload = loadQuestion;

