document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.modal__close-btn');
  
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
  }
  
  btnOpen.addEventListener('click', openModal);
  
  btnClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});