// Fireworks Animation Script
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('fireworks');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to store fireworks
    const fireworks = [];
    const particles = [];

    // Utility function to generate random numbers
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Firework class
    class Firework {
        constructor() {
            this.x = random(0, canvas.width);
            this.y = canvas.height;
            this.sx = random(-3, 3); // Horizontal speed
            this.sy = random(-15, -10); // Vertical speed
            this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
            this.size = random(2, 4);
        }

        update() {
            this.x += this.sx;
            this.y += this.sy;
            this.sy += 0.1; // Gravity effect

            if (this.sy >= 0) {
                this.explode();
                fireworks.splice(fireworks.indexOf(this), 1);
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        explode() {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(this.x, this.y));
            }
        }
    }

    // Particle class for explosion
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = random(1, 3);
            this.speed = random(2, 6);
            this.angle = random(0, Math.PI * 2);
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
            this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
            this.alpha = 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.05; // Gravity effect
            this.alpha -= 0.01; // Fade out effect
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    // Function to create fireworks
    function createFireworks() {
        fireworks.push(new Firework());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw fireworks
        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            // Remove fireworks that are done
            if (firework.sy >= 0) {
                fireworks.splice(index, 1);
            }
        });

        // Update and draw particles
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();

            // Remove particles that are fully faded
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    // Start the animation
    setInterval(createFireworks, 500); // Create a new firework every 500ms
    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});