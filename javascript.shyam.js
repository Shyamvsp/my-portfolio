// 1. THE SURPRISE FUNCTION: Toggle Dark/Light Mode
function toggleSurprise() {
    // This looks for a class called 'dark-mode' in your CSS
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Add a fun message
    if (body.classList.contains("dark-mode")) {
        console.log("Dark Mode Activated!");
        alert("Surprise! You've unlocked the Dark Theme for Venkat's Portfolio.");
    } else {
        alert("Back to the Light! Hope you liked the surprise.");
    }
}

// 2. SMOOTH SCROLLING: Makes the page slide nicely when you click links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. LOGO HOVER EFFECT: A little console log "easter egg" for developers
const logos = document.querySelectorAll('.skill-box');
logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        console.log("Venkat is skilled in " + logo.querySelector('p').innerText);
    });
});