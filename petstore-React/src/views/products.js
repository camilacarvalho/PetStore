import React from 'react';
import FilterProduct from '../components/basic/filter-product';
import ListProduct from '../components/product/list-product';
import Page from '../components/basic/page';
import {notifyInfo,notifyCode } from '../components/utils/toast-utils';
import{categories} from '../components/utils/product-utils';
import{favorites} from '../components/utils/lists';
import {products} from '../components/utils/lists';
import {isProductInFavoriteList, addInBasketList, addInFavoriteList, removeInFavoriteList} from '../components/utils/product-utils';

export default class Products extends React.Component {


    addBasket = (product) => {
        addInBasketList(product);
        notifyInfo("Item adicionado ao carrinho")
    }

    addFavorites = (product) =>{
        if(!isProductInFavoriteList(product)){
            addInFavoriteList(product);
            console.log(favorites);
            notifyInfo("Item adicionado a lista de favoritos");
        }else{
            removeInFavoriteList(product);
            notifyInfo("Item removido da lista de favoritos");
        }
       
    }
    
    render() {

        return (
            <>
                {notifyCode()}
                <div className="container-sm">
                    <br />
                    <div className="card" style={{ padding: "2rem" }}>
                        <h3>Nossos Produtos</h3>
                        <div className="dropdown-divider"></div>
                        <FilterProduct name="Categorias" categories={categories} />
                        <ListProduct actionButton={this.addBasket} nameButton="Adicionar ao carrinho" numberRow={3} isCategory={true} isRating={true} isFavorite={true} favoriteActionButton={this.addFavorites} products={products} />
                      <br />
                        <Page limite={9} quantProduct={products.length} />
                    </div></div>
                <br />
                <br />
            </>
        );
    }
}