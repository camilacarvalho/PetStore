import React, { useState, useEffect } from 'react';
import FilterProduct from '../components/basic/filter-product';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import { urlGetProducts, urlGetCategories, getRequestInit } from '../utils/request';
import { isProductInFavoriteList, addInBasketList, addInFavoriteList, removeInFavoriteList } from '../utils/product-utils';

function Products() {

    var optionDefault = { text: "Selecione uma categoria", value: 0 };
    const [products, setProducts] = useState([])
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);


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

    useEffect(() => {
        fetch(urlGetProducts, getRequestInit)
            .then(res => res.json())
            .then(response => {
                setProducts(response);
                setProductList(response);
            })
            .catch(error => console.log(error))
    }, [page]);

    useEffect(() => {
        fetch(urlGetCategories, getRequestInit)
            .then(res => res.json())
            .then(response => {
                setCategories(response);
            })
            .catch(error => console.log(error))
    }, [page]);

    var filter = (atribute, value) => {
        if (value == optionDefault.value) {
            setProductList(products);
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
                </div>

            </div>
            <br />
            <br />
        </>
    );
}
export default Products;