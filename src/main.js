document.getElementById('mobile-menu').addEventListener('click', function () {
  document.getElementById('mobile-modal-overlay').classList.add('is-open');
});

document
  .getElementById('close-mobile-menu')
  .addEventListener('click', function () {
    document.getElementById('mobile-modal-overlay').classList.remove('is-open');
  });
