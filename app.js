const menu_button = document.querySelector('.fas.fa-bars');
const menu = document.querySelector('.menu_section');
const close_button = document.querySelector('.fas.fa-times')
const clock = document.querySelector('.clock');


menu_button.addEventListener('click', function () {
  menu.classList.toggle('active');
})

close_button.addEventListener('click', function () {
  menu.classList.toggle('active');
})

window.addEventListener('DOMContentLoaded', watch);

function watch() {
  setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = 'PM';


    // Validation
    if (hours < 10) {
      hours = '0' + hours;
      meridiem = 'AM';
    } else if (hours > 12) {
      hours = hours - 12;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    displayTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    clock.innerHTML = displayTime;
  }, 1000);
}



// Show/Hide Password
const hide_pw = document.querySelector('.fas.fa-eye-slash');
const show_pw = document.querySelector('.fas.fa-eye');
const show_pw_text = document.querySelector('.show_pw');
const hide_pw_text = document.querySelector('.hide_pw');
const input = document.querySelector('#password');

show_pw.addEventListener('click', function () {
  hide_pw.classList.toggle('active');
  show_pw.classList.toggle('active');
  hide_pw_text.classList.toggle('active');
  show_pw_text.classList.toggle('active');

  // Show Password
  if (input.type === 'password') {
    input.type = 'text';
  }

});

hide_pw.addEventListener('click', function () {
  show_pw.classList.toggle('active');
  hide_pw.classList.toggle('active');
  show_pw_text.classList.toggle('active');
  hide_pw_text.classList.toggle('active');
  //  Hide Password
  if (input.type === 'text') {
    input.type = 'password';
  }
});


// Close sign up menu
const sign_up_close = document.querySelector('.signIn_container .fas.fa-times');

sign_up_close.addEventListener('click', function (e) {
  sign_up_close.parentElement.remove();
})

// Log in 
const login = document.querySelector('ul li:nth-child(5)');
console.log(login);

login.addEventListener('click', function () {
  sign_up_close.classList.add('active');
})


