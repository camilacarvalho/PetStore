export const urlGetProducts = 'http://localhost:3000/products/';
export const urlGetCategories = 'http://localhost:3000/products/categories/';
export const urlGetBasket = 'http://localhost:3000/shopping_cart/';
export const urlGetFavorites = 'http://localhost:3000/favorites/';

export const getRequestInit = {
    method:'GET',
    headers:{
        'Content-Type': 'application/json'
    }
};

export const deleteRequestInit = {

}

export const postRequestInit = {

}

export const isProductInBasketList = (product) => {
   
}

export const addProductInFavorite = (product) => {
    /*fetch(urlGetFavorites,)
        .then(res => res.json())
        .then(response=>{
            console.log(response);
        })
        .catch(error=>console.log(error))*/
}

export const addProductInBasket = (product) => {
    console.log(product)
}

export const removeProductInFavorite = (product) => {

}

export const removeProductInBasket = (product) => {

}



