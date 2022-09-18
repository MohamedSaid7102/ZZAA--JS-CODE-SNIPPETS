const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// To prevent page from scrolling when modal is openned
const preventPageScrolling = (prevent = false) => {
  if (prevent) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'absolute';
  } else {
    document.body.style.overflow = 'initial';
    document.body.style.position = 'initial';
  }
};

const openModal = function () {
  modal.classList.remove('hidden');
  preventPageScrolling(true);
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  preventPageScrolling(false);
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
