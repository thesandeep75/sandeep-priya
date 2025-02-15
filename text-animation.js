

const animatedText = document.querySelector('.animated-text');
let text = animatedText.textContent;
animatedText.textContent = '';

let i = 0;

function typeWriter() {
    if (i < text.length) {
        animatedText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();