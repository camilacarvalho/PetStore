import React, { useState, useEffect } from 'react';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import { favorites } from '../lists';
import { addInBasketList, removeInFavoriteList } from '../utils/product-utils';
import {urlGetFavorites, getRequestInit} from '../utils/url-request-utils'; 

function Favorites() {

    const [products, setProducts] = useState(favorites.slice());

    var removeFavorite = (product) => {
        remove(product);
        notifyInfo("Item removido dos favoritos");
    };
    
    useEffect(() => {
        fetch(urlGetFavorites,getRequestInit )
        .then(res => res.json())
        .then(response=>{
            console.log(response);
        })
        .catch(error=>console.log(error))
    })

    var moveBasket = (product) => {
        remove(product);
        addInBasketList(product);
        notifyInfo("Item movido para o carrinho");
    };

    var remove = (product) => {
        removeInFavoriteList(product);
        setProducts(favorites.slice());
    };

    return (
        <>
            {notifyCode()}

            <div className="container-sm">
                <br />
                <div className="card" style={{ padding: "2rem", backgroundColor: "rgb(220,220,220)" }}>
                    <h3>Lista de desejos</h3>
                    <div className="dropdown-divider"></div>
                    {products.length === 0 ? <>
                        <center> <br /><h4>Você não tem itens na lista de favoritos</h4>
                            <h6>Calma que aqui tem tuuudo, vem com a gente :)</h6>
                            <a href="#/"> <button type="button" className="btn btn-outline-danger btn-sm">Ver Produtos</button></a>
                        </center>
                    </> : <></>}
                    <ListProduct 
                    buttons={[{ name: "Mover para o carrinho", action: "buttonAction1", style: "btn btn-outline-secondary", confirmation: false }]}
                    buttonAction1={moveBasket} 
                    numberRow={4} 
                    isDescription={false} 
                    isCategory={false} 
                    isRating={false} 
                    isFavorite={true} 
                    favoriteActionButton={removeFavorite} 
                    products={products} />
                    <br />
                </div>
            </div>
        </>
    );
}
export default Favorites;

