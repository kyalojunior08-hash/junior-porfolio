
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring Software Developer",
    "Web Developer",
    "C++ Programmer",
    "Future Full-Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
