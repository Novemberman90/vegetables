
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('menu__btn--active');
  menuList.classList.toggle('menu__list--active');
});





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