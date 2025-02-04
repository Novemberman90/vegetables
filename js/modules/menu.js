  
export const initMenu = ()=> {
    const menuBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');
    
      const closeMenu = ()=>{
      document.body.classList.remove('lock');
      menuBtn.classList.remove('menu__btn--active');
      menuList.classList.remove('menu__list--active');

    
    }

    const openMenu = ()=> {
      document.body.classList.toggle('lock');
        menuBtn.classList.toggle('menu__btn--active');
        menuList.classList.toggle('menu__list--active');
    }
    
    menuBtn.addEventListener('click', ()=>{
        openMenu();
    });
    
    return {closeMenu, menuList, menuBtn} // Экспортирую `closeMenu`, чтобы использовать в `scrollNavigation`
  }

