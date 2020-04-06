
import { favorites } from '../lists';
import { basket } from '../lists';
import { BasketModel } from '../model/basket-model'

export const categories = [
    "ALIMENTO", "HIGIENE", "ACESSORIOS", "BRINQUEDOS"
];

export const isProductInFavoriteList = (product) => {
    for (let index = 0; index < favorites.length; index++) {
        const favorite = favorites[index];
        if (favorite.id === product.id) {
            return true;
        }
    }
    return false;
}

export const addInFavoriteList = (product) => {
    if(!isProductInFavoriteList(product)){
        favorites.push(product);
    }
}

export const removeInFavoriteList = (product) => {
    var index = favorites.indexOf(product);
    if (index > -1) {
        favorites.splice(index, 1);
    }
}

export const addInBasketList = (product) => {
    if(!isProductInBasketList(product)){
        console.log("product")
        console.log(product)
        const item = new BasketModel(product, 1);
        console.log("item")
        console.log(item)
        basket.push(item);
    }
    
}

export const removeInBasketList = (product) => {
    var index = basket.indexOf(product);
    if (index > -1) {
        basket.splice(index, 1);
    }
}

export const isProductInBasketList = (product) => {
    for (let index = 0; index < basket.length; index++) {
        const item = basket[index].product;
        if (item.id === product.id) {
            return true;
        }
    }
}

export const resetBasket = () => {
    basket.splice(0, basket.length);
}