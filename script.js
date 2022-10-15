'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// LECTURES


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