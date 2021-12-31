window.addEventListener('scroll',navColorChange);

const navBar = document.querySelector('.navbar');

function navColorChange() {
    

    // Check if window is scrolled more than 300px from top
    if (window.scrollY >= 250) {
        // If yes - check if navbar contains class nav-opacity. Result of this if will be no casue this class hasn't been set by default.
        if (navBar.classList.contains('bg-primary'));
        // Add this class to navbar
        navBar.classList.add('bg-primary');
    } else {
        // If scroll Y < 300px , remove class that was added when we scrolled down
        navBar.classList.remove('bg-primary');
    };
};
