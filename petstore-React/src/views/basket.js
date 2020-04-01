import React from 'react';
import ItemBasket from '../components/basket/item-basket';
import {notifyInfo,notifyCode, notifySuccess } from '../utils/toast-utils';
import {basket} from '../lists';
import {resetBasket, addInFavoriteList, removeInBasketList} from '../utils/product-utils';

export default class Basket extends React.Component {


    state = {
        total: 0
    }

    removeProduct = (item) => {
        this.remove(item);
        notifyInfo("Removido do carrinho de compras."); 
    }

    remove(item){
        removeInBasketList(item)
        this.calculaTotal();
    }

    moveFavorite = (item) =>{
        this.remove(item);
        this.addFavorites(item);
        
    }

    addFavorites(item){
        addInFavoriteList(item);
        notifyInfo("Movido para a lista de favoritos.");
    }

    setQuantity = (item) => {
        var index = basket.indexOf(item);
        basket[index] = item;
        this.calculaTotal();
    }
    
    calculaTotal = () => {
        var atual = 0;
        basket.forEach(item => {
            atual = atual + (item.product.price * item.quantity)
        });
        this.setState({ total: atual });
    }

    componentDidMount() {
        this.calculaTotal();
    }
    
    finally(){
        notifySuccess("Compra realizada com sucesso.");
        this.setState({total:0})
        resetBasket();
    }

    render() {

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
                            {this.state.total===0?<>
                          
                           <center> <br /><h4>Você não tem itens no carrinho</h4>
                            <h6>Calma que aqui tem tuuudo, vem com a gente :)</h6>
                           <a href=""> <button type="button" className="btn btn-outline-danger btn-sm">Ver Produtos</button></a>
                            </center>
                            
                            
                            </>:<></>}
                                {basket.map((item, index) => { 
                                    return (<ItemBasket key={index} setQuantity={this.setQuantity} buttons={[{name:"Mover para favoritos",action:"buttonAction1", style:"btn btn-outline-secondary", confirmation:false}, {name:"Remover", action:"buttonAction2", style:"btn btn-outline-danger", confirmation:true, confirmation_modal:{title:"Remover Item",text:"Deseja remover o item " + item.product.name + " do carrinho?" }}]}  buttonAction1={this.moveFavorite} buttonAction2={this.removeProduct} item={item} />)
                                })
                                }
                            </div>
                            <div className="col-6 col-md-4">
                                <p className="card-text"><small className="text-muted">Total</small></p>
                                <h2>R${this.state.total.toFixed(2)}</h2>
                                <button type="button"disabled={this.state.total===0} onClick={()=>this.finally()} className="btn btn-warning btn-lg btn-block">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

