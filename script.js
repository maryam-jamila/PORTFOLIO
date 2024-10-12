// script.js

// Dynamic greeting based on time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greetingMessage = '';

    if (hours >= 5 && hours < 12) {
        greetingMessage = 'Good Morning, Maryam!';
    } else if (hours >= 12 && hours < 18) {
        greetingMessage = 'Good Afternoon, Maryam!';
    } else {
        greetingMessage = 'Good Evening, Maryam!';
    }

    greetingElement.textContent = greetingMessage;
}

// Call the greeting function on page load
window.onload = setGreeting;

// Hover effect for showing project details
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.querySelector('.details').style.display = 'block';
    });
    project.addEventListener('mouseout', () => {
        project.querySelector('.details').style.display = 'none';
    });
});
