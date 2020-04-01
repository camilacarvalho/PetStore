import React from 'react';
import Rating from '../basic/rating';
import Heart from '../../assets/images/cards-heart.svg';
import HeartOutline from '../../assets/images/heart-outline.svg';
import {isProductInFavoriteList} from '../utils/product-utils'

function ItemProduct(props) {

var iconFavorite = () =>{
    if(isProductInFavoriteList(props.product)===true){
        return Heart;
    }else{
        return HeartOutline;
    }
}

    return (
        <>
            <div className="card">
                {props.isFavorite ? (<a className="navbar-brand" onClick={()=>props.favoriteActionButton(props.product)} style={{ marginRight: "2 em", marginLeft: "auto" }}>
                    <img src={iconFavorite()} width="30" height="30" alt="" />
                </a>) : <></>}
                <img className="card-img-top" src={props.product.image} alt="Card image cap" style={{ padding: "2rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    {props.isDescription ? (<p className="card-text">{props.product.description}</p>) : <> </>}
                    {props.isRating ? (<Rating rating={props.product.rating} />) : <> </>}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Preço: {props.product.price} R$</li>
                    {props.isCategory ? (<li className="list-group-item">Categoria: {props.product.category} </li>) : <></>}
                </ul>
                <div className="card-body">
                    <button type="button" onClick={ ()=>props.actionButton(props.product)} class="btn btn-outline-secondary">{props.nameButton}</button>
                </div>
            </div>
        </>
    );
}

export default ItemProduct;