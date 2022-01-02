window.addEventListener('scroll',navColorChange);
const navBar = document.querySelector('.navbar');

document.querySelector('#name').value = '';
document.querySelector('#email').value = '';
document.querySelector('#phone').value = '';
document.querySelector('#message').value = '';

let globalName = document.querySelector('#name');
let globalEmail = document.querySelector('#email');

const form = document.querySelector('.my-form');
form.addEventListener('submit',validate);



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


function eventListeners() {
    globalName.addEventListener('focus',function() {
        globalName.style.outline = '2px solid #0d6efd';
        document.querySelector('.nameError').classList.add('d-none');
    }) 
    globalName.addEventListener('blur',function(){
        globalName.style.outline = 'none';
    })
    globalEmail.addEventListener('focus',function() {
        globalEmail.style.outline = '2px solid #0d6efd';
        document.querySelector('.mailError').classList.add('d-none');
    }) 
    globalEmail.addEventListener('blur',function(){
        globalEmail.style.outline = 'none';
    })
}


function validate(event) {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    if (name.value.trim() === '') {
        event.preventDefault();
        name.style.outline = "thick solid red";
        document.querySelector('.nameError').classList.remove('d-none')
    } 
   
    if (email.value.trim() === '') {
        event.preventDefault();
        email.style.outline = "thick solid red"; 
        document.querySelector('.mailError').classList.remove('d-none')
    } 

    eventListeners();

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#message').value = '';
}

