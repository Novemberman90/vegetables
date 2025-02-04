


 export const scrollNavigation = (closeMenu)=>{
    const scrollLinks = document.querySelectorAll('.menu__link')
    
    scrollLinks.forEach(link => {

       const targetId = link.getAttribute('href');
       console.log(targetId);
       if (!targetId || targetId === "#") return;

      link.addEventListener('click', (e)=>{
        e.preventDefault();
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
      });
    });
  }

  