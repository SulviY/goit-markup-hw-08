(() => {
    const refs = {
      openModalBtn: document.querySelector('[js-menu-open]'),
      closeModalBtn: document.querySelector('[js-menu-close]'),
      modal: document.querySelector('[js-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();