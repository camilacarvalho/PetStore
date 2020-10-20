import React,{useEffect, useState} from 'react';
import Rating from '../basic/rating';
import Heart from '../../assets/images/cards-heart.svg';
import HeartOutline from '../../assets/images/heart-outline.svg';
import {urlContainsFavorites, getRequestInit} from '../../utils/request';
import ItemCard from '../card/item-card';

function ItemProduct({key, isDescription, buttonAction1, buttons, favoriteActionButton, isCategory, isRating, isFavorite, product}) {

    const [iconFavorite, setIconFavorite] = useState(HeartOutline);

    useEffect(() => {
        fetch(urlContainsFavorites.replace('{id}', product.id), getRequestInit)
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
            <div className="card border-warning">
                {isFavorite ? (<a className="navbar-brand" onClick={() => favoriteActionButton(product)} style={{ marginRight: "2 em", marginLeft: "auto" }}>
                    <img src={iconFavorite} width="30" height="30" alt="" />
                </a>) : <></>}
                <ItemCard  
                    image={{ src: product.image, className: "card-img-top", alt: "Card image cap", style: { padding: "2rem" } }}
                    column={{ image: "", body: "" }}
                    product={product}
                    description={<>{isDescription ? (<p className="card-text">{product.description}</p>) : <> </>}
                         {isRating ? (<Rating rating={product.rating} />) : <> </>}</>}
                     list={!isCategory ? ["Preço: " + product.price + " R$"] : ["Preço: " + product.price + " R$", "Categoria: " + product.category]}
                    item={product}
                    buttonAction1={buttonAction1}
                    buttons={buttons}/>
            </div>
        </> 
    );
}

export default ItemProduct;