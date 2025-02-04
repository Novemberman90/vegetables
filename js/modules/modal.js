

export const modalController =(menuList, menuBtn)=>{
  
    const modalTriggers = document.querySelectorAll('[data-open-cart]');
    const buttonCloseModal= document.querySelector('[data-close-modal]');
    const modal = document.querySelector('.popup');
    
   const removeLock = () => {
     if (!menuList.classList.contains('menu__list--active') && !menuBtn.classList.contains('menu__btn--active')) {
       document.body.classList.remove('lock');
     }
  };

    
    // Открытие модального окна
    const openModal = ()=>{
        modal.classList.add('popup--active');
        document.body.classList.add('lock');
    }
    
    modalTriggers.forEach(item => {
      item.addEventListener('click', (e)=>{ 
        e.preventDefault();
        openModal()
      })
    });
    
    
    // Закрытие модального окна
    const closeModal =()=> {
      modal.classList.remove('popup--active');
     removeLock();
    }
    
    buttonCloseModal.addEventListener('click',()=> {
       closeModal();
    });
    
    // Закрытие модального окна при клике вне его содержимого
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
        removeLock();
      }
    });
    // закрытие клавишей ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('popup--active')) {
        closeModal();
        removeLock();
      }
    });
  }

 