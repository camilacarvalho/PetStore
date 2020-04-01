import React from 'react';
import ItemProduct from './item-product';

function RowProducts(props) {

    var products = props.products;

    var concatena = (c1, c2) => {
        return <>{c1}{c2}</>
    }

    var prepareProduct = () => {
        if (props.products.length < props.numberRow) {
            var quant = (props.numberRow - props.products.length);
            let retorno = <div className="card"></div>;
            for (let index = 0; index < quant - 1; index++) {
                retorno = concatena(retorno, <div className="card"></div>);
            }
            return (retorno);
        }
    };

    return (
        <>
            <div className="card-group">
                {(products).map((product, index) => {
                    return (
                        <ItemProduct key={index} actionButton={props.actionButton} isDescription={props.isDescription} nameButton={props.nameButton} favoriteActionButton={props.favoriteActionButton} isCategory={props.isCategory} isRating={props.isRating} isFavorite={props.isFavorite} product={product} />
                    );
                })}
                {prepareProduct()}
            </div>
        </>
    );
}

export default RowProducts;