// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if(characterIndex > 0){
        textElements.innerHTML = texts[textIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(eraseText, speed);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter