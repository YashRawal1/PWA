// 🔹 Menu Toggle Function
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// 🔹 Open About Section
function openAbout() {
    document.getElementById("about-section").style.display = "block";
}

// 🔹 Close About Section
function closeAbout() {
    document.getElementById("about-section").style.display = "none";
}
