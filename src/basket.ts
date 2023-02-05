const products = <HTMLDivElement>document.querySelector('.products');

let counter = 0;
export function putInBasket(): void {
  console.log('BASKET');
  products.addEventListener('click', (event: Event  & { target: Element }) => { // делегирование повешано на родителя товаров.
    const target = event.target;
    const BTN = target.closest('button'); // тыкаем ли мы по кнопке ?
      if(BTN){ // Если да, то...
      target.classList.toggle('into-basket');
      if(target.classList.contains('buy-now-BTN')) { 
        target.innerHTML = 'in basket';
        counter --;
      }
      if(!target.classList.contains('into-basket')) {  
        target.innerHTML = 'Buy now';
        counter ++;
      }
    }
  });
  console.log(counter);
}
putInBasket();

