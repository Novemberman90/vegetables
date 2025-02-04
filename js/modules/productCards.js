
 export const createCard = (cards)=> {
    const productItemBlock = document.querySelector('.product__item-block');
    if (!productItemBlock) {
      console.error('Элемент .product__item-block не найден');
      return;
    }

      cards.forEach(({img, altimg, title, descr, price}) => {

      if (!img || !altimg || !title || !descr || price === undefined) {
      console.warn('Неполные данные для карточки:', { img, altimg, title, descr, price });
      return;
      }

      const productItem = document.createElement('div');
      const classes = 'product__item wow animate__animated animate__zoomIn';
      productItem.classList.add(...classes.split(' '));
      productItem.innerHTML = `
    
        <h3 class="product__item-title">${title}</h3>
          <p class="product__descr">${descr}</p>
        <img class="product__img" src=${img} alt=${altimg}>
        <div class="product__prise-box">
          <span class="product__prise">${price}</span>
          <span class="product__curency">UAH</span> / kg
        </div>
      
      `;
      productItemBlock.append(productItem);
    });
  }

