const birthdayDate = new Date(2026, 9, 8, 0, 0, 0).getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = birthdayDate - now;

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("hours-display").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes-display").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds-display").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (timeRemaining < 0) {
        
        clearInterval(countdownInterval);

        document.getElementById("hours-display").innerText = "00";
        document.getElementById("minutes-display").innerText = "00";
        document.getElementById("seconds-display").innerText = "00";

        document.getElementById("reveal-button").style.display = "block";

    }

}, 1000);

document.getElementById("reveal-button").addEventListener("click", function() {
    document.querySelector(".countdown-page").style.display = "none";
    document.querySelector(".reveal-page").style.display = "flex";

    confetti({
        particleCount: 150,
        spread: 80,
        origin: {y : 0.6}
    });
});