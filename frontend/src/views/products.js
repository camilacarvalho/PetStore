import React, { useState, useEffect } from 'react';
import FilterProduct from '../components/basic/filter-product';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import { urlGetProducts, urlGetCategories, urlContainsFavorites, addInBasketList, getRequestInit, addProductInFavorite, removeProductInFavorite} from '../utils/request';

function Products() {

    var optionDefault = { text: "Selecione uma categoria", value: 0 };
    const [products, setProducts] = useState([])
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(urlGetProducts, getRequestInit)
            .then(res => res.json())
            .then(response => {
                setProducts(response);
                setProductList(response);
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch(urlGetCategories, getRequestInit)
            .then(res => res.json())
            .then(response => {
                setCategories(response);
            })
            .catch(error => console.log(error))
    }, []);

    var addBasket = (product) => {
        addInBasketList(product);
        notifyInfo("Item adicionado ao carrinho")
    }

    var addFavorites = (product) => {
        fetch(urlContainsFavorites.replace('{id}', product.id), getRequestInit)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response===true){
                removeProductInFavorite(product.id);
                notifyInfo("Item removido da lista de favoritos");
            }else{
                addProductInFavorite(product);
                notifyInfo("Item adicionado a lista de favoritos");
            }
            setProductList(productList.slice());
        })
        .catch(error => console.log(error))
    }

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
                <div className="card border-warning" style={{ padding: "2rem", backgroundColor: "rgb(220,220,220)" }} >
                    <h3>Nossos Produtos</h3>
                    <div className="dropdown-divider"></div>

                    <FilterProduct
                        plural_name="Categorias"
                        singular_name = "categoria"
                        categories={categories}
                        functionFilter={filter} />

                    <ListProduct
                        buttonAction1={addBasket}
                        buttons={[{ name: "Adicionar ao carrinho", action: "buttonAction1", style: "btn btn-outline-success", confirmation: false }]}
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