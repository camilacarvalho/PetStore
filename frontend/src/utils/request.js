import { BasketModel } from '../model/basket-model';

// Urls

const URL_DOMAIN = 'http://localhost:';
const PORT = 3001;
const BASE = URL_DOMAIN + PORT.toString();

export const urlGetProducts = BASE + '/products/';
export const urlGetCategories = BASE + '/products/categories/';
export const urlGetOrPostOrDeleteAllBasket = BASE + '/shopping_cart/';
export const urlGetOrPostFavorites = BASE + '/favorites/';
export const urlDeleteOrPutProductInBasket = BASE + '/shopping_cart/{id}';
export const urlDeleteProductInFavorites = BASE + '/favorites/{id}';
export const urlContainsFavorites = BASE + '/favorites/contains/{id}';

// Param request init

export const getRequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const deleteRequestInit = () => {
    return {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
}

export const postRequestInit = (product) => {
    return {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    }
}

export const putRequestInit = (product) => {
    return {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    }
}

// Requisitions

export const addProductInFavorite = (product) => {
    fetch(urlGetOrPostFavorites, postRequestInit(product))
        .then(res => res.json())
        .then(response => {
        })
        .catch(error => console.log(error))
}

export const addProductInBasket = (product) => {
    fetch(urlGetOrPostOrDeleteAllBasket, postRequestInit(product))
        .then(res => res.json())
        .then(response => {
        })
        .catch(error => console.log(error))
}

export const removeProductInFavorite = (id) => {
    fetch(urlDeleteProductInFavorites.replace('{id}', id), deleteRequestInit())
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error))
}


export const putProductInBasket = (product) =>{
    fetch(urlDeleteOrPutProductInBasket.replace('{id}', product.id), putRequestInit(product))
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error))
}

// Auxiliary methods

export const addInBasketList = (product) => {
    const item = new BasketModel(product, 1);
    addProductInBasket(item);    
}