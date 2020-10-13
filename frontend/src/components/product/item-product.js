import React,{useEffect, useState} from 'react';
import Rating from '../basic/rating';
import Heart from '../../assets/images/cards-heart.svg';
import HeartOutline from '../../assets/images/heart-outline.svg';
import {urlContainsFavorites, getRequestInit} from '../../utils/request';
import ItemCard from '../card/item-card';

function ItemProduct(props) {

    const [iconFavorite, setIconFavorite] = useState(HeartOutline);

    useEffect(() => {
        fetch(urlContainsFavorites.replace('{id}', props.product.id), getRequestInit)
        .then(res => res.json())
        .then(response => {

            if(response===true){
                setIconFavorite(Heart);
            }else{
                setIconFavorite(HeartOutline);
            }
        })
        .catch(error => console.log(error))
    });
    
    return (
        <> 
            <div className="card">
                {props.isFavorite ? (<a className="navbar-brand" onClick={() => props.favoriteActionButton(props.product)} style={{ marginRight: "2 em", marginLeft: "auto" }}>
                    <img src={iconFavorite} width="30" height="30" alt="" />
                </a>) : <></>}
                <ItemCard  
                    image={{ src: props.product.image, className: "card-img-top", alt: "Card image cap", style: { padding: "2rem" } }}
                    column={{ image: "", body: "" }}
                    product={props.product}
                    description={<>{props.isDescription ? (<p className="card-text">{props.product.description}</p>) : <> </>}
                         {props.isRating ? (<Rating rating={props.product.rating} />) : <> </>}</>}
                     list={!props.isCategory ? ["Preço: " + props.product.price + " R$"] : ["Preço: " + props.product.price + " R$", "Categoria: " + props.product.category]}
                    item={props.product}
                    buttonAction1={props.buttonAction1}
                    buttons={props.buttons}/>
            </div>
        </> 
    );
}

export default ItemProduct;