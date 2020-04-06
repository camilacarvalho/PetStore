import React from 'react';
import Rating from '../basic/rating';
import Heart from '../../assets/images/cards-heart.svg';
import HeartOutline from '../../assets/images/heart-outline.svg';
import { isProductInFavoriteList } from '../../utils/product-utils'
import ListButtonsCard from '../basic/list-buttons-card';
import InfoBodyCard from '../basic/info-body-card';


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
                <div className="">
                <img className="card-img-top" src={props.product.image} alt="Card image cap" style={{ padding: "2rem" }} />
                </div>
                <div className="">
                <InfoBodyCard 
                        product={props.product}
                        description={<>{props.isDescription ? (<p className="card-text">{props.product.description}</p>) : <> </>}
                        {props.isRating ? (<Rating rating={props.product.rating} />) : <> </>}</>}
                        list={!props.isCategory?["Preço: "+props.product.price+" R$"]:["Preço: "+props.product.price+" R$","Categoria: "+props.product.category]}
                        />
                </div>
                <ListButtonsCard 
                item={props.product}
                buttonAction1={props.buttonAction1} 
                buttons={props.buttons}
                 />
            </div>
        </>
    );
}

export default ItemProduct;