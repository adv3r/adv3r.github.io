const checkbox = document.getElementById('theme-checkbox');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    checkbox.checked = savedTheme === 'dark-mode';
}

// Toggle dark/light mode
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.className = 'light-mode';
        localStorage.setItem('theme', 'light-mode');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let projectCards = document.querySelectorAll('.project-card--bged');

    projectCards.forEach(projectCard => {
        let blurHld = document.createElement('div');
        blurHld.classList.add("blur-hld");

        projectCard.appendChild(blurHld);
    });
});


