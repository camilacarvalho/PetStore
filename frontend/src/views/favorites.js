import React, { useState, useEffect } from 'react';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import {urlGetOrPostFavorites, getRequestInit, addInBasketList,  urlDeleteProductInFavorites, deleteRequestInit} from '../utils/request';

function Favorites() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    var removeFavorite = (product) => {
        remove(product.id);
        notifyInfo("Item removido dos favoritos");
    };
    
    useEffect(() => {
        putFavorites();
    },[page])

    var moveBasket = (product) => {
        remove(product.id);
        addInBasketList(product);
        notifyInfo("Item movido para o carrinho");
    };

    var remove = (id) => {
        removeProductInFavorite(id);
        //  putFavorites();
    };

    var removeProductInFavorite = (id) => {
        fetch(urlDeleteProductInFavorites.replace('{id}', id), deleteRequestInit())
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setProducts(response);
            })
            .catch(error => console.log(error))
    }

    var putFavorites = () =>{
        fetch(urlGetOrPostFavorites,getRequestInit )
        .then(res => res.json())
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>console.log(error))
    }
    
    return (
        <>
            {notifyCode()}

            <div className="container-sm">
                <br />
                <div className="card border-warning" style={{ padding: "2rem", backgroundColor: "rgb(220,220,220)" }}>
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

