// function for the harmburger menu
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
    };


// function for the contact form
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adewoleadetunji77@gmail.com",
        Password : "6095014D0404DA797BD7205088114DE1234D",
        To : 'adewoleadetunji77@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form filled from Ensome",
        Body : "Name: " + document.getElementById("name").value
                + " <br> Email: " + document.getElementById("email").value
                + " <br> Theme: " + document.getElementById("theme").value
                + " <br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully, Thank you for choosing Ensome.")
    );
}