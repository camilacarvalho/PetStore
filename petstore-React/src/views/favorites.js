import React from 'react';
import ListProduct from '../components/product/list-product';
import { notifyInfo, notifyCode } from '../utils/toast-utils';
import { favorites} from '../lists';
import {addInBasketList, removeInFavoriteList} from '../utils/product-utils';
export default class Favorites extends React.Component {

    state = {
        products: favorites
    }

    removeFavorite = (product) => {
        this.remove(product);
        notifyInfo("Item removido dos favoritos")
    };

    moveBasket = (product) => {
        this.remove(product);
        addInBasketList(product);
        notifyInfo("Item movido para o carrinho")
    };

    remove = (product) => {
        removeInFavoriteList(product)
        this.setState({ product: favorites });
    };

    render() {
        return (
            <>
                {notifyCode()}

                <div className="container-sm">
                    <br />
                    <div className="card" style={{ padding: "2rem", backgroundColor: "rgb(220,220,220)" }}>
                        <h3>Lista de desejos</h3>
                        <div className="dropdown-divider"></div>
                        {this.state.products.length === 0 ? <>

                            <center> <br /><h4>Você não tem itens na lista de favoritos</h4>
                                <h6>Calma que aqui tem tuuudo, vem com a gente :)</h6>
                                <a href=""> <button type="button" className="btn btn-outline-danger btn-sm">Ver Produtos</button></a>
                            </center>


                        </> : <></>}
                        <ListProduct actionButton={this.moveBasket} nameButton="Mover para o carrinho" numberRow={4} isDescription={false} isCategory={false} isRating={false} isFavorite={true} favoriteActionButton={this.removeFavorite} products={this.state.products} />
                        <br />
                    </div>
                </div>
            </>
        );
    }
}