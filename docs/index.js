(() => {

    'use strict'

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const form = document.querySelector('form');
    const input = document.querySelector('form input');
    const span = document.querySelector('form #error-text');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        if (!emailRegex.test(input.value)) {
            span.innerText = 'Please enter a valid email address';
            span.style.color = 'hsl(0, 100%, 63%)';
        } else {
            span.style.color = '#00ff00';
            span.innerText = 'Submission succesfully sent!';
        }
    });

    input.addEventListener('keydown', () => {
        span.innerText = '';
    });

})()