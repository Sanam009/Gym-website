document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    console.log(hamburger); // Should not be null
    console.log(navLinks); // Should not be null

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicked!'); // Check if the click event is working
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Hamburger or navLinks element not found!');
    }
});
