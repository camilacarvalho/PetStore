import React from 'react';
import ItemProduct from './item-product';

function RowProducts(props) {

    var products = props.products;

    var concatena = (c1, c2) => {
        return <>{c1}{c2}</>
    }

    return (
        <>
            <div className="card-group">
                {(products).map((product, index) => {
                    return (
                        <ItemProduct key={index} isDescription={props.isDescription} buttonAction1={props.buttonAction1} buttons={props.buttons} favoriteActionButton={props.favoriteActionButton} isCategory={props.isCategory} isRating={props.isRating} isFavorite={props.isFavorite} product={product} />
                    );
                })}

                { (props.products.length < props.numberRow) ? 
                <> {Array(props.numberRow - props.products.length).fill().map((x) => <div className="card"></div>)} </>
                :
                <></>
                }               
            </div>
        </>
    );
}

export default RowProducts;