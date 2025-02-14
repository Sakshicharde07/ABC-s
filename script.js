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

    // Generate alphabet letters dynamically
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

        // Add animations
        letterImage.classList.add("glow");
        imageName.classList.add("pop");

        setTimeout(() => {
            letterImage.classList.remove("glow");
            imageName.classList.remove("pop");
        }, 1000);
    }
});
