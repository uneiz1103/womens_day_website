document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Balloon Animation
    const container = document.querySelector(".balloon-container");
    if (container) {
        for (let i = 0; i < 20; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(balloon);
        }
    }

    // Text Animation
    setTimeout(() => {
        document.querySelector(".womens-day-text").classList.add("appear");
    }, 1000);

    // Open Gift Button
    const openGiftBtn = document.getElementById("openGift");
    if (openGiftBtn) {
        openGiftBtn.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    }

    // Meet Our Stars Button
    const meetStarsBtn = document.getElementById("meetStars");
    if (meetStarsBtn) {
        meetStarsBtn.addEventListener("click", function () {
            window.location.href = "team.html";
        });
    }

    // Relive Moments Button
    const reliveMomentsBtn = document.getElementById("reliveMoments");
    if (reliveMomentsBtn) {
        reliveMomentsBtn.addEventListener("click", function () {
            window.location.href = "gallery.html";
        });
    }

    // Back to Home Button
    const backHomeBtn = document.getElementById("backHome");
    if (backHomeBtn) {
        backHomeBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});