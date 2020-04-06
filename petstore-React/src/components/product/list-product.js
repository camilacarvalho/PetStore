import React from 'react';
import RowProducts from './row-products'

function ListProduct(props) {
    var products = [];

    var prepareProductListByLine = () => {
        var size = props.products.length;
        var quantList = Math.ceil(size / props.numberRow);
        var indexProduto = 0;
        for (let index = 0; index < quantList; index++) {
            var products1 = [];
            products1.push(props.products[indexProduto]);
            indexProduto++;
            var value = props.numberRow - 1;
            for (let index = 0; index < value; index++) {
                if (props.products[indexProduto]) {
                    products1.push(props.products[indexProduto]);
                    indexProduto++;
                }
            }
            products.push(products1);
        }
    }

    return (
        <>
            {prepareProductListByLine()}
            {
                products.map((product, index) => {
                    return (
                        <RowProducts key={index} numberRow={props.numberRow} isDescription={props.isDescription} products={product} buttonAction1={props.buttonAction1}  buttons={props.buttons} favoriteActionButton={props.favoriteActionButton} isCategory={props.isCategory} isRating={props.isRating} isFavorite={props.isFavorite} />

                    );
                })
            }

        </>
    );
}
export default ListProduct;