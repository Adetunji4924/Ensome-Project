let toggle = document.querySelector('.harmburger');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open')
});

// function for the accordion in the FAQ page
let acc = document.getElementsByClassName("accordion");

    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
        })
    }
