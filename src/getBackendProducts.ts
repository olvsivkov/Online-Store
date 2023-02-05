const app = <HTMLDivElement>document.querySelector('.products');

interface Argument {
  products: [{
    price: string;
    title: string; 
    images: string[];
    thumbnail: string;
  }];
}

export function getListProducts(): void {
  console.log('getBackendProducts');
  fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => getData(data))
    .catch(err => console.error(err.message));

  function getData(arg: Argument): void {
    for(let i = 0; i < 10; i ++){
      const divTitle = <HTMLDivElement>document.createElement('div');
      divTitle.classList.add('product-title');
      const divPrice = <HTMLDivElement>document.createElement('div');
      divPrice.classList.add('product-price');
      const productWrapper = <HTMLDivElement>document.createElement('div');
      productWrapper.classList.add('product-wrapper');
      const img = <HTMLImageElement>document.createElement('img');
      img.classList.add('product-img');
      const putIntoBTN = document.createElement('button');
      putIntoBTN.classList.add('buy-now-BTN');


      divTitle.innerHTML = arg.products[i].title;
      divPrice.innerHTML = `Price $ ${arg.products[i].price}`;
      putIntoBTN.innerHTML = 'Buy now';
      img.src = arg.products[i].thumbnail;
      app.appendChild(productWrapper);
      productWrapper.appendChild(img);
      productWrapper.appendChild(divTitle);
      productWrapper.appendChild(divPrice);
      productWrapper.appendChild(putIntoBTN);
    }
  }
}
getListProducts();