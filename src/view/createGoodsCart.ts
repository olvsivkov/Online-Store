/*
products {
  //brand: "Apple"
  //category: "smartphones"
  //description: "An apple mobile which is nothing like apple"
  //discountPercentage: 12.96
  //id: 1
  //images: (5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg',  'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.  com/data/products/1/thumbnail.jpg']
  //price: 549
  //rating: 4.69
  //stock: 94
  //thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  //title: "iPhone 9"
}
*/

interface Argument {
  products: [{
    id?: number;
    price?: number;
    title?: string; 
    images?: string[];
    thumbnail?: string;
    brand?: string;
    category?: string;
    description?: string;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
  }];
}

const app = <HTMLDivElement>document.querySelector('.products');

export function getData(arg:Argument): void { // создает карточку товара на странице
  for(let i = 0; i < 10; i ++){
    const productWrapper = `
    <div class="product-wrapper">
      <img class="product-img" src=${arg.products[i].thumbnail}>
      <div class="product-title">${arg.products[i].title}</div>
      <div class="product-stock">${arg.products[i].stock} units</div>
      <div class="product-price-counter">
        <div class="product-price">Price $ ${arg.products[i].price}</div>
        <div class="counter-wrapper">
          <div class="counter-minus">-</div>
          <div class="counter-value">1</div>
          <div class="counter-plus">+</div>
        </div>
      </div>
      <button class="buy-now-BTN">Buy now</button>
    </div>`;
    app.insertAdjacentHTML('beforeend', productWrapper);
  }
}
