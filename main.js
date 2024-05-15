// navigation menu


const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const body = document.body;

menu.addEventListener('click', () => {
  body.classList.add('active');
})
close.addEventListener('click', () => {
  body.classList.remove('active');
})

// carousel 

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const auto = true;
const intervalTime = 5000;
let slideInterval; 

const nextSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current');
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {

  const current = document.querySelector('.current')

  current.classList.remove('current');
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length -1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}
next.addEventListener('click', e => {
  nextSlide();
  });

prev.addEventListener('click', e => {
  prevSlide();
  });

if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}