
const heartsCanvas = document.getElementById('hearts');
const heartsCtx = heartsCanvas.getContext('2d');

heartsCanvas.width = window.innerWidth;
heartsCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    heartsCanvas.width = window.innerWidth;
    heartsCanvas.height = window.innerHeight;
});

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 2 + 1;
        this.opacity = 1;
    }

    draw() {
        heartsCtx.save();
        heartsCtx.globalAlpha = this.opacity;
        heartsCtx.fillStyle = '#FF69B4';
        heartsCtx.beginPath();
        heartsCtx.moveTo(this.x, this.y);
        heartsCtx.bezierCurveTo(
            this.x - this.size / 2, this.y - this.size / 2,
            this.x - this.size, this.y + this.size / 3,
            this.x, this.y + this.size
        );
        heartsCtx.bezierCurveTo(
            this.x + this.size, this.y + this.size / 3,
            this.x + this.size / 2, this.y - this.size / 2,
            this.x, this.y
        );
        heartsCtx.closePath();
        heartsCtx.fill();
        heartsCtx.restore();
    }

    update() {
        this.y -= this.speed;
        this.opacity -= 0.01;
    }
}

let hearts = [];

function animateHearts() {
    heartsCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);

    if (Math.random() < 0.1) {
        hearts.push(new Heart(Math.random() * heartsCanvas.width, heartsCanvas.height));
    }

    hearts.forEach((heart, index) => {
        if (heart.opacity <= 0) {
            hearts.splice(index, 1);
        } else {
            heart.update();
            heart.draw();
        }
    });

    requestAnimationFrame(animateHearts);
}

animateHearts();
