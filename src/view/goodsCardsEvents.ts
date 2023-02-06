import {products} from '../controller/basket'; // статический products из html. Без него ничего на динамических товарах не найти.
import {counterGoods} from '../controller/goodsCounter'; // добавляет/убавляет кол-во товара 
export function counterG() {products.addEventListener('click', counterGoods);} // клик по + или - на карточке товара
