let homeScore = 0;
let guestScore = 0;

document.getElementById("home-plus-1").addEventListener("click", () => updateScore('home', 1));
document.getElementById("home-plus-2").addEventListener("click", () => updateScore('home', 2));
document.getElementById("home-plus-3").addEventListener("click", () => updateScore('home', 3));
document.getElementById("guest-plus-1").addEventListener("click", () => updateScore('guest', 1));
document.getElementById("guest-plus-2").addEventListener("click", () => updateScore('guest', 2));
document.getElementById("guest-plus-3").addEventListener("click", () => updateScore('guest', 3));

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').innerText = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guest-score').innerText = guestScore;
    }
}