document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
            navLinks.classList.remove("active");
        });
    });

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let formData = new FormData(this);
    
    fetch(this.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
        this.reset(); // Clear form fields
    })
    .catch(error => alert("Error sending message!"));
});
});