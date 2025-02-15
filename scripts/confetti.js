

const confettiCanvas = document.getElementById('confetti');
const confettiCtx = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

class Confetti {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.opacity = 1;
    }

    draw() {
        confettiCtx.save();
        confettiCtx.globalAlpha = this.opacity;
        confettiCtx.fillStyle = this.color;
        confettiCtx.fillRect(this.x, this.y, this.size, this.size);
        confettiCtx.restore();
    }

    update() {
        this.y += this.speed;
        this.x += Math.cos(this.angle) * 2;
        this.opacity -= 0.01;
    }
}

let confettis = [];

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    if (Math.random() < 0.2) {
        confettis.push(new Confetti(Math.random() * confettiCanvas.width, 0));
    }

    confettis.forEach((confetti, index) => {
        if (confetti.opacity <= 0) {
            confettis.splice(index, 1);
        } else {
            confetti.update();
            confetti.draw();
        }
    });

    requestAnimationFrame(animateConfetti);
}

animateConfetti();