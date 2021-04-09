'use strict';

// SELECTING VARIABLES

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SCROLL EVENTHANDLERS

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // target object --btnScrollTo
  // to get the position/coordinates of the btnScrollTo
  console.log(e.target.getBoundingClientRect());

  // To get the scrolling of the web page from the viewport.
  // each scroll will be shown in pixels and from top-tip of the viewport to bottom-tip of the viewport
  // taking all these offset values

  // cuurent scroll position ---the viewport scroll position
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // setting the value to scroll
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // to make it as nice transition, which is a behaviour
  // this is kind of oldSchool way of doing the scroll
  // because we have taken the values of XYOffset and matching it
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // new way of doing the Scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////

// Page NAvigation

// OLD WAY OF DOING WITHOUT EVENT DELEGATION

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// USING EVENT DELEGATION

// 1. Add event listener to common parent elemnent

// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); //  where the event occured element in the nav link
  e.preventDefault();

  // Matching strategy --to ignore click events outside the links

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
