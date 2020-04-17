export const urlGetProducts = 'http://localhost:3000/products/';
export const urlGetCategories = 'http://localhost:3000/products/categories/';
export const urlGetOrPostBasket = 'http://localhost:3000/shopping_cart/';
export const urlGetOrPostFavorites = 'http://localhost:3000/favorites/';
export const urlDeleteProductInBasket = 'http://localhost:3000/shopping_cart/{id}';
export const urlDeleteProductInFavorites = 'http://localhost:3000/favorites/{id}';

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

export const addProductInFavorite = (product) => {
    console.log(product);
}

export const addProductInBasket = (product) => {
    console.log(product)
}

export const removeProductInFavorite = (id) => {
    console.log(id);
}

export const removeProductInBasket = (id) => {
    console.log(id);
}



