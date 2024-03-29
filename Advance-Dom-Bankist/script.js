'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////
//////////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header =document.querySelector('.header');
const allSections =document.querySelectorAll(".section");
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.querySelectorAll('button');
console.log(allButtons);

//Creating and inserting elements

const message = document.createElement('div');
message.classList.add("cookie-method");
message.innerHTML= `We use cookied for improved functionality and analytics <button class="btn btn--close-cookie">Got it</button>`;

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

header.before(message);
header.after(message);

//Delete elements
document.querySelector(".btn--close-cookie").addEventListener("click",function(){
// message.remove();
message.parentElement.removeChild(message);
})