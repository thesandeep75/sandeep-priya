<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Wedding of Sandeep & Priya</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="fireworks-container">
            <canvas id="fireworks"></canvas>
            <canvas id="hearts"></canvas>
            <canvas id="confetti"></canvas>
            <div class="container">
                <h1 class="animated-text">Join Us in Celebrating Love</h1>
                <p>We invite you to witness the union of two souls</p>
            </div>
        </div>
    </header>

    <!-- Bride & Groom Section -->
    <section class="bride-groom">
        <div class="container">
            <h2>About the Couple</h2>
            <div class="couple-profiles">
                <div class="profile groom">
                    <img src="images/groom.jpg" alt="Groom" class="profile-image">
                    <h3>Sandeep</h3>
                    <p>A passionate soul who loves adventure and laughter.</p>
                </div>
                <div class="profile bride">
                    <img src="images/bride.jpg" alt="Bride" class="profile-image">
                    <h3>Priya</h3>
                    <p>A kind-hearted dreamer with a love for art and music.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Invitation Section -->
    <section class="invitation">
        <div class="container">
            <!--h2>The Wedding of Sandeep & Priya</h2-->
            <h3>Venue</h3>
            <p class="date">Monday, 14th April 2025</p>
            <p class="time">6:00 PM Onwards</p>
            <p class="location">
                Rudrapur City Club,
                Near Rudra Continental,<br>
                Rudrapur,
                Uttarakhand 263153
            </p>
            <div class="buttons">
                <a href="downloads/Priya&Sandeep_Wedding_Invitation.pdf" download="Sandip_Priya_Wedding_Invite.pdf" class="btn">Download Invite</a>
                <a href="https://www.google.com/maps?q=Rudrapur+City+Club,+Kashipur+Bypass+Rd,+Near+Rudra+Continental,+Rudrapur,+Jagatpura,+Uttarakhand+263153" target="_blank" class="btn location-btn">View Location</a>
            </div>
            <!-- Countdown Timer -->
            <div class="countdown">
                <h4>Countdown to the Big Day</h4>
                <div id="timer">
                    <div class="time-box">
                        <span id="days">00</span>
                        <p>Days</p>
                    </div>
                    <div class="time-box">
                        <span id="hours">00</span>
                        <p>Hours</p>
                    </div>
                    <div class="time-box">
                        <span id="minutes">00</span>
                        <p>Minutes</p>
                    </div>
                    <div class="time-box">
                        <span id="seconds">00</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Event Details Section -->
    <section class="details">
        <div class="container">
            <h2>Event Highlights</h2>
            <div class="event-info">
                <div class="event animate-event">
                    <div class="event-icon var-mala-icon" style="background-image: url('images/haldi.jpeg');"></div>
                    <h3>Haldi</h3>
                    <p>10:00 AM</p>
                </div>
                <div class="event animate-event">
                    <div class="event-icon ring-icon" style="background-image: url('images/Barat.jpeg');"></div>
                    <h3>Barat Departure</h3>
                    <p>6:00 PM</p>
                </div>
                <div class="event animate-event">
                    <div class="event-icon phera-icon" style="background-image: url('images/phera-icon.png');"></div>
                    <h3>Auspicious Wedding Rituals</h3>
                    <p>As per the sacred time</p>
                </div>
                <div class="event animate-event">
                    <div class="event-icon bhoj-icon" style="background-image: url('images/bhoj-icon.png');"></div>
                    <h3>Reception Dinner</h3>
                    <p>8:00 PM</p>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Photo Gallery -->
    <section class="gallery">
        <div class="container">
            <h2>Our Memories</h2>
            <div class="photo-grid">
                <img src="images/gallery1.jpg" alt="Couple Photo 1">
                <img src="images/gallery2.jpg" alt="Couple Photo 2">
                <img src="images/gallery3.jpg" alt="Couple Photo 3">
                <img src="images/gallery4.jpg" alt="Couple Photo 4">
            </div>
        </div>
    </section>

    <!-- Personalized Message -->
    <section class="personal-message">
        <div class="container">
            <h2>A Message from Us</h2>
            <p>We are thrilled to celebrate this special day with you. Your presence means the world to us, and we look forward to sharing this beautiful journey together.</p>
            <p>With love,<br>Sandip & Priya</p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2025 Sandeep & Priya's Wedding. All rights reserved.</p>
        </div>
    </footer>

    <!-- Scroll-to-Top Button -->
    <button id="scrollToTop" class="btn">↑ Top</button>

    <!-- Background Music -->
    <audio id="backgroundMusic" loop>
        <source src="music/wedding-music.mp3" type="audio/mp3">
    </audio>
    <button id="playPauseButton" class="btn">Play Music</button>

    <!-- Fireworks Script -->
    <script src="scripts/fireworks.js"></script>
    <!-- Hearts Script -->
    <script src="scripts/hearts.js"></script>
    <!-- Confetti Script -->
    <script src="scripts/confetti.js"></script>
    <!-- Countdown Timer Script -->
    <script>
        const weddingDate = new Date("April 14, 2025 18:00:00").getTime();

        const countdownTimer = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = weddingDate - now;

            if (timeLeft <= 0) {
                clearInterval(countdownTimer);
                document.getElementById('timer').innerHTML = "<h4>The big day is here!</h4>";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }, 1000);
    </script>
    <!-- Background Music Script -->
    <script>
        const audio = document.getElementById('backgroundMusic');
        const button = document.getElementById('playPauseButton');

        button.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                button.textContent = 'Pause Music';
            } else {
                audio.pause();
                button.textContent = 'Play Music';
            }
        });
    </script>
    
    <!-- Scroll-to-Top Script -->
    <script>
        const scrollToTopButton = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    </script>
</body>
</html>