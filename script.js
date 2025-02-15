document.addEventListener("DOMContentLoaded", function() {
    const lettersContainer = document.querySelector(".letters-container");
    const letterImage = document.getElementById("letterImage");
    const imageName = document.getElementById("imageName");

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


    for (const letter in alphabetImages) {
        const letterDiv = document.createElement("div");
        letterDiv.classList.add("letter");
        letterDiv.innerText = letter;
        letterDiv.addEventListener("click", () => showLetterImage(letter));
        lettersContainer.appendChild(letterDiv);
    }

    function showLetterImage(letter) {
        letterImage.src = alphabetImages[letter].url;
        letterImage.style.display = "block";
        imageName.innerText = alphabetImages[letter].name;
    }
});

// ** Updated Quiz Data with Shuffled Options **
let currentQuestionIndex = 0;
const questions = [
    { letter: 'A', correctAnswer: 'Apple 🍎', options: ['Apple 🍎', 'Ball ⚽'] },
    { letter: 'B', correctAnswer: 'Ball ⚽', options: ['Ball ⚽', 'Apple 🍎'] },
    { letter: 'C', correctAnswer: 'Cat 🐱', options: ['Cat 🐱', 'Dog 🐶'] },
    { letter: 'D', correctAnswer: 'Dog 🐶', options: ['Dog 🐶', 'Cat 🐱'] },
    { letter: 'E', correctAnswer: 'Elephant 🐘', options: ['Elephant 🐘', 'Fish 🐟'] },
    { letter: 'F', correctAnswer: 'Fish 🐟', options: ['Fish 🐟', 'Elephant 🐘'] },
    { letter: 'G', correctAnswer: 'Giraffe 🦒', options: ['Giraffe 🦒', 'Horse 🐴'] },
    { letter: 'H', correctAnswer: 'Horse 🐴', options: ['Horse 🐴', 'Giraffe 🦒'] },
    { letter: 'I', correctAnswer: 'Ice Cream 🍦', options: ['Ice Cream 🍦', 'Jelly 🍇'] },
    { letter: 'J', correctAnswer: 'Jelly 🍇', options: ['Jelly 🍇', 'Ice Cream 🍦'] },
    { letter: 'K', correctAnswer: 'Kite 🪁', options: ['Kite 🪁', 'Lion 🦁'] },
    { letter: 'L', correctAnswer: 'Lion 🦁', options: ['Lion 🦁', 'Kite 🪁'] },
    { letter: 'M', correctAnswer: 'Monkey 🐒', options: ['Monkey 🐒', 'Nut 🥜'] },
    { letter: 'N', correctAnswer: 'Nut 🥜', options: ['Nut 🥜', 'Monkey 🐒'] },
    { letter: 'O', correctAnswer: 'Owl 🦉', options: ['Owl 🦉', 'Penguin 🐧'] },
    { letter: 'P', correctAnswer: 'Penguin 🐧', options: ['Penguin 🐧', 'Owl 🦉'] },
    { letter: 'Q', correctAnswer: 'Queen 👑', options: ['Queen 👑', 'Rabbit 🐰'] },
    { letter: 'R', correctAnswer: 'Rabbit 🐰', options: ['Rabbit 🐰', 'Queen 👑'] },
    { letter: 'S', correctAnswer: 'Sun 🌞', options: ['Sun 🌞', 'Tree 🌳'] },
    { letter: 'T', correctAnswer: 'Tree 🌳', options: ['Tree 🌳', 'Sun 🌞'] },
    { letter: 'U', correctAnswer: 'Umbrella ☂️', options: ['Umbrella ☂️', 'Vulture 🦅'] },
    { letter: 'V', correctAnswer: 'Vulture 🦅', options: ['Vulture 🦅', 'Umbrella ☂️'] },
    { letter: 'W', correctAnswer: 'Whale 🐋', options: ['Whale 🐋', 'Xylophone 🎼'] },
    { letter: 'X', correctAnswer: 'Xylophone 🎼', options: ['Xylophone 🎼', 'Whale 🐋'] },
    { letter: 'Y', correctAnswer: 'Yarn 🧶', options: ['Yarn 🧶', 'Zebra 🦓'] },
    { letter: 'Z', correctAnswer: 'Zebra 🦓', options: ['Zebra 🦓', 'Yarn 🧶'] },
];


function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('quizLetter').textContent = question.letter;
    
    const options = document.querySelectorAll('.option');
    options.forEach((button, index) => {
        button.textContent = question.options[index];
    });

    document.getElementById('feedback').textContent = '';  // Clear feedback
    document.getElementById('nextButton').style.display = 'none';  // Hide next button initially
}

function checkAnswer(isCorrect) {
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');

    if (isCorrect) {
        feedback.textContent = 'Correct! 🎉';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. Try Again! 😞';
        feedback.style.color = 'red';
    }

    nextButton.style.display = 'inline-block';  // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestion();
    } else {
        document.body.innerHTML = '<h2>Congratulations! You have completed the quiz! 🎉</h2>';
    }
}

// Initialize the first question
updateQuestion();
