window.addEventListener('DOMContentLoaded', ()=>{

  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');
  
  
  
  menuBtn.addEventListener('click', ()=>{
    if(menuBtn) {
      openMenu()
      document.body.classList.toggle('lock');
    }
  });
  const openMenu = ()=> {
      menuBtn.classList.toggle('menu__btn--active');
      menuList.classList.toggle('menu__list--active');
  }
  
  const closeMenu = ()=>{
    menuBtn.classList.remove('menu__btn--active');
    menuList.classList.remove('menu__list--active');
  }
  
  const scrollNavigation = ()=>{
    const scrollLinks = document.querySelectorAll('.menu__link')
    
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e)=>{
        e.preventDefault();
        const targetId = link.getAttribute('href');
        console.log(targetId);
        const targetElement = document.querySelector(targetId);
        console.log(targetElement);
        
        if(targetElement) {
          const headerHeight = document.querySelector('#header').offsetHeight;
          
          const top = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: top,
            behavior: "smooth"
          });
        }
        closeMenu();
      })
    });
  }
  scrollNavigation();
  
  const modalController =()=>{
  
    const modalTriggers = document.querySelectorAll('[data-open-cart]');
    const buttonCloseModal= document.querySelector('[data-close-modal]');
    const modal = document.querySelector('.popup');
    
    const removeLock = ()=>{
      document.body.classList.remove('lock');
    }
    
    // Открытие модального окна
    const openModal = ()=>{
        modal.classList.add('popup--active');
        document.body.classList.add('lock');
        closeMenu();
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
    }
    
    buttonCloseModal.addEventListener('click',()=> {
       closeModal();
       removeLock();
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
  modalController();
  
  new WOW().init();
  
  //слайдер
  const slideLabels = ["#organic", "#products", "#basket", "#vegetables"]; // Массив с подписями для каждого слайда

  var swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    setWrapperSize: true,
    autoHeight: true,
    /* autoplay: true, */
    pagination: {
      el: ".hero-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
      return (
        '<div class="' + className + ' hero-slider-bullet">' + " " + slideLabels[index] + "</div>"
      );
      },
    },
      breakpoints: {
  768: { // для планшетов
    spaceBetween: 20, // Уменьшите отступы
    slidesPerView: 1, // Оставьте один слайд видимым
  },
  1024: { // для больших планшетов
    spaceBetween: 30,
    slidesPerView: 1, // Один слайд на экране
  },
},
  });


});