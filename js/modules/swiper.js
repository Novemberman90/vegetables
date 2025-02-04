import Swiper from "../../node_modules/swiper/swiper-bundle.min.mjs";


  export const initSwiper = ()=> {

 //слайдер
 const slideLabels = ["#organic", "#products", "#basket", "#vegetables"]; // Массив с подписями для каждого слайда
    new Swiper(".mySwiper", {
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

};

