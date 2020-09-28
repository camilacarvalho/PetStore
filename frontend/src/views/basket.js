import React, { useState, useEffect } from 'react';
import ItemBasket from '../components/basket/item-basket';
import { notifyInfo, notifyCode, notifySuccess } from '../utils/toast-utils';
import {urlDeleteOrPutProductInBasket, getRequestInit,deleteRequestInit,addProductInFavorite, urlGetOrPostOrDeleteAllBasket, putProductInBasket} from '../utils/request';

function Basket() {

    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);


    var removeProduct = (item) => {
        remove(item);
        notifyInfo("Removido do carrinho de compras.");
    }

    useEffect(() => {
        calculaTotal();
    });

    var remove = (item) => {
        removeProductInBasket(item.id)
        calculaTotal();
       // putBasketList();
    }

    var removeProductInBasket = (id) => {
        fetch(urlDeleteOrPutProductInBasket.replace('{id}', id), deleteRequestInit())
            .then(res => res.json())
            .then(response => {
                setBasket(response);
            })
            .catch(error => console.log(error))
    }

    var moveFavorite = (item) => {
        remove(item);
        addFavorites(item.product);
    }

    var addFavorites = (product) => {
        addProductInFavorite(product);
        notifyInfo("Movido para a lista de favoritos.");
    }

    var setQuantity = (item) => {
        putProductInBasket(item);
        calculaTotal();
    }

    var calculaTotal = () => {
        var atual = 0;
        basket.forEach(item => {
            atual = atual + (item.product.price * item.quantity)
        });
        setTotal(atual);
    }

    var buy = () => {
        notifySuccess("Compra realizada com sucesso.");
        setTotal(0);
        resetAllBasket();
    }


    var putBasketList = () =>{
        fetch(urlGetOrPostOrDeleteAllBasket,getRequestInit)
        .then(res => res.json())
        .then(response=>{
            setBasket(response);
        })
        .catch(error=>console.log(error))
    }

    var resetAllBasket = () => {
        fetch(urlGetOrPostOrDeleteAllBasket, deleteRequestInit())
            .then(res => res.json())
            .then(response => {
                setBasket(response);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        putBasketList();    
        }, [page])
 
    return (
        <>
            {notifyCode()}
            <div className="container-sm">
                <br />
                <div className="card" style={{ padding: "2rem", backgroundColor: "rgb(220,220,220)" }}>
                    <h3>Carrinho</h3>
                    <div className="dropdown-divider"></div>

                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            {total === 0 ? <>

                                <center> <br /><h4>Você não tem itens no carrinho</h4>
                                    <h6>Calma que aqui tem tuuudo, vem com a gente :)</h6>
                                    <a href="#/"> <button type="button" className="btn btn-outline-danger btn-sm">Ver Produtos</button></a>
                                </center>
                            </> : <></>}
                            {basket.map((item, index) => {
                                return (<ItemBasket key={index} 
                                    setQuantity={setQuantity} 
                                    buttons={[{ name: "Mover para favoritos", action: "buttonAction1", style: "btn btn-outline-secondary", confirmation: false }, { name: "Remover", action: "buttonAction2", style: "btn btn-outline-danger", confirmation: true, confirmation_modal: { title: "Remover Item", text: "Deseja remover o item " + item.product.name + " do carrinho?" } }]} 
                                    buttonAction1={moveFavorite} 
                                    buttonAction2={removeProduct} 
                                    item={item} />)
                            })
                            }
                        </div>
                        <div className="col-6 col-md-4">
                            <p className="card-text"><small className="text-muted">Total</small></p>
                            <h2>R${total.toFixed(2)}</h2>
                            <button type="button" disabled={total === 0} onClick={() => buy()} className="btn btn-warning btn-lg btn-block">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Basket;

