import {getListProducts} from './model/getBackendProducts';
import {putInBasket} from './controller/basket';
import {counterG} from './view/goodsCardsEvents';

getListProducts(); // формирует список товаров на странице браузера

putInBasket(); // положить товар в корзину (пока реализована смена классов в кнопке Buy now)

counterG(); // выбор колличества товара (пока реализовано делегирование события клика на + и -)

