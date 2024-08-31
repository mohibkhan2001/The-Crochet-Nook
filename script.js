document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  // Sticky Navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const slogans = document.querySelectorAll('.slogan');
  let currentIndex = 0;

  function showNextSlogan() {
    slogans[currentIndex].classList.remove('slogan-active');
    currentIndex = (currentIndex + 1) % slogans.length;
    slogans[currentIndex].classList.add('slogan-active');
  }

  // Show the first slogan
  slogans[currentIndex].classList.add('slogan-active');

  // Change slogan every 5 seconds
  setInterval(showNextSlogan, 5000);
});

let crochet_icon = document.querySelector('#crochet-icon');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  crochet_icon.style.transform = `rotate(${value + 30}deg)`;
  document.querySelector('body').style.overflowX = 'hidden';
});
