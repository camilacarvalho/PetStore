import React from 'react';
import Rating from '../basic/rating';
import Heart from '../../assets/images/cards-heart.svg';
import HeartOutline from '../../assets/images/heart-outline.svg';
import { isProductInFavoriteList } from '../../utils/product-utils'
import ListButtonsCard from '../card/list-buttons-card';
import InfoBodyCard from '../card/info-body-card';
import ItemCard from '../card/item-card';


function ItemProduct(props) {

    var iconFavorite = () => {
        if (isProductInFavoriteList(props.product) === true) {
            return Heart;
        } else {
            return HeartOutline;
        }
    }

    return (
        <>
            <div className="card">
                {props.isFavorite ? (<a className="navbar-brand" onClick={() => props.favoriteActionButton(props.product)} style={{ marginRight: "2 em", marginLeft: "auto" }}>
                    <img src={iconFavorite()} width="30" height="30" alt="" />
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