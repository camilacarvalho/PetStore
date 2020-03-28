import React from 'react';
import Rating from '../rating';
import Heart from '../../assets/images/cards-heart.svg';


function ItemProduct(props) {

var removeItemFavorite=()=>{
    console.log(props.product.id)
}
var moveBasket=()=>{
    console.log(props.product.id)
}
var addBasket=()=>{
    console.log(props.product.id)
}

    return (
        <>
            <div className="card">
            {props.isFavorite?(<a className="navbar-brand" onClick={removeItemFavorite} style={{marginRight:"2 em", marginLeft: "auto"}}>
                                <img src={Heart} width="30" height="30" alt="" />
                            </a>):<></>}
                <img className="card-img-top" src={props.product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    {!props.isFavorite?(<><p className="card-text">{props.product.description}</p><Rating rating={props.product.rating}/></>):<> </>}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Preço: {props.product.price} R$</li>
                    {!props.isFavorite?(<li className="list-group-item">Categoria: {props.product.category} </li>):<></>}
                </ul>
                <div className="card-body">
                {!props.isFavorite?
                    (<a className="card-link"  onClick={addBasket}>Adicionar ao Carrinho</a>):
                    (<a className="card-link" onClick={moveBasket}>Mover para o carrinho</a>)}
                    
                </div>
            </div>
        </>
    );
}
export default ItemProduct;