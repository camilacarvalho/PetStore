import React, { useState, useEffect } from 'react';
import FilterProduct from '../components/basic/filter-product';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import { categories } from '../utils/product-utils';
import { products } from '../lists';
import { isProductInFavoriteList, addInBasketList, addInFavoriteList, removeInFavoriteList } from '../utils/product-utils';

function Products() {

    var optionDefault = { text: "Selecione uma categoria", value: 0 };
    const [productList, setProductList] = useState(products.slice());

    var addBasket = (product) => {
        addInBasketList(product);
        notifyInfo("Item adicionado ao carrinho")
    }

    var addFavorites = (product) => {
        if (!isProductInFavoriteList(product)) {
            addInFavoriteList(product);
            notifyInfo("Item adicionado a lista de favoritos");
        } else {
            removeInFavoriteList(product);
            notifyInfo("Item removido da lista de favoritos");
        }
        setProductList(productList.slice());

    }

    var filter = (atribute, value) => {
        if (value == optionDefault.value) {
            setProductList(products.slice());
        } else {
            var listFilter = [];
            products.filter(prod => prod[atribute].toUpperCase() == value).map(productFiltered => (
                listFilter.push(productFiltered)
            ))
            setProductList(listFilter);
        }
    }

    return (
        <>
             {notifyCode()}
            <div className="container-sm">
                <br />
                <div className="card" style={{ padding: "2rem" }}>
                    <h3>Nossos Produtos</h3>

                    <div className="dropdown-divider"></div>
                    
                    <FilterProduct 
                    optionDefault={optionDefault} 
                    name="Categorias" 
                    categories={categories} 
                    functionFilter={filter} />

                    <ListProduct 
                    buttonAction1={addBasket}
                    buttons={[{ name: "Adicionar ao carrinho", action: "buttonAction1", style: "btn btn-outline-secondary", confirmation: false }]}
                    numberRow={3} 
                    isDescription={true} 
                    isCategory={true} 
                    isRating={true} 
                    isFavorite={true} 
                    favoriteActionButton={addFavorites} 
                    products={productList} />
                    <br />
                </div></div>
            <br />
            <br />
        </>
    );
} 
export default Products;