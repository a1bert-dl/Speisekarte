let HauptspeisenButton = document.getElementById("VorspeisenButton");
let NachspeisenButton = document.getElementById("NachspeisenButton");

HauptspeisenButton.addEventListener("click", function() {
    window.location.href = "Vorspeisen.html";
});

NachspeisenButton.addEventListener("click", function() {
    window.location.href = "Nachspeisen.html";
});