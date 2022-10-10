let toggle = document.querySelector('.harmburger');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open')
});