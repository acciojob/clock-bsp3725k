function updateTimer() {
    const timerElement = document.getElementById("timer");
    const currentTime = new Date();
    timerElement.textContent = currentTime.toLocaleString();
}

// Call updateTimer every second
setInterval(updateTimer, 1000);