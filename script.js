'use strict';
//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// functions
// Working with Classes
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//
for (const btnModal of btnShowModal) {
  btnModal.addEventListener('click', showModal);
}
//
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//
// Handling 'Esc' Keypress
document.addEventListener('keydown', function (e) {
  // e - listen to escape event
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
