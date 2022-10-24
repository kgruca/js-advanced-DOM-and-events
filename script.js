'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// implement smooth scrolling
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


///////////////////////////////////////
// button scrolling
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // Scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset, 
    //     s1coords.top + window.pageYOffset
    // );

    // // Can make the scrolling more smooth by:  
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset, 
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });

    // an even more modern way:
    section1.scrollIntoView({behavior: 'smooth'});
});

///////////////////////////////////////
// Page Navigation 

document.querySelectorAll('.nav__link').forEach(
  function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    });
});


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// LECTURES


/*
// NEW SECTION
// event propagation aka bubbling

const randomInt = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) +1);

const randomColor = () => 
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// attach the random color to the features link and the parent element too

document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
});

// clicking on the features link changes the color of the features link, the nav__links, and nav. 
// clicking on the nav__links changes the nav__links and nav
// clicking on the nav changes just the nav

// this is because the action first bubbles down from the document element to the child element that is handling the event
// then, the action bubbles back up towards the document element
// so clicking of features link will hit the child element nav__link, then bubble back up and hits the nav__links and
// nav on the way back
// nav__link is not touched when you click elsewhere in the nav__links element
// nav__link and nav__links aren't touched when you click on the nav elem

// can stop this behavior by putting a stopPropagation() event into any of the event listeners above.
// for example, putting e.stopPropagation() into nav__link will result in the color changing only on nav__link

// to reverse this behavior (make the event occur when the event is passing down from document to the child element), can
// specify a third parameter in addEventListener(). adding 'true' will cause nav to be changed first, then nav__links, then 
// nav__link when clicking of features (nav__link)


// NEW SECTION
// types of events and event handlers
const h1 = document.querySelector('h1');

const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the heading :D');

    // can put removeEventListener code into this same function, so that the alert only pops up once
    // h1.removeEventListener('mouseenter', alertH1);
    // or can do this later on in the code
};

h1.addEventListener('mouseenter', alertH1);

// example of removing the event listener after some time has passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// There's also a third way of handling events, but this one should not be used:
// defining it directly in HTML code 


// NEW SECTION
// Selecting, Creating, and Deleting Elements

// can select entire document of any webpage:
console.log(document.documentElement);
// logs the code structure of the html for the document
// can't just use "document" b/c it's not a real DOM element
// can also select head and body:
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// logs a nodelist of 4 elems

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality 
// and analytics.`;
message.innerHTML = `We use cookies for improved functionality 
and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// can add something before a parent element
//header.prepend(message);
// can also add after a parent element
header.append(message);
// the message was moved to the bottom of the screen, even though the code
// above prepends it
// because it's now a live element living in the DOM, it cannot be in multiple 
// places at the same time 

// if we DO want it to appear in multiple places at the same time, then 
// we need to clone it first
// commenting out the append message above
//header.append(message.cloneNode(true));
// true in this situation means that all the child elements will be copied
// now, the same cookie message appears in both places

// header.before(message);
// this will add the message element BEFORE the header AS A SIBLING
// header.after(message)
// this will add the message element AFTER the header AS A SIBLING

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', 
  function() {
    message.remove();
});
// now when the button is clicked then the message disappears


// NEW SECTION
// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get styles by
console.log(getComputedStyle(message));
// logs all styles
console.log(getComputedStyle(message).color);
// logs rgb(187, 187, 187)

// to change style, ex.
message.style.height = getComputedStyle(message).height + 40 + 'px';
*/