import React from 'react';
import RowProducts from './row-products'

function ListProduct(props) {
    var products = [];
    
    var prepareProduct = () => {
        var size = props.products.length;
        var quantList = Math.ceil(size / props.numberRow);
        console.log(props.products)
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
        console.log(products)
    }

    return (
        <>
            {prepareProduct()}
            {
                products.map(product => {
                    return (
                        <RowProducts numberRow={props.numberRow} products={product} actionButton={props.actionButton} nameButton={props.nameButton} favoriteActionButton={props.favoriteActionButton} isCategory={props.isCategory} isRating={props.isRating} isFavorite={props.isFavorite} />
                        
                    );
                })
            }

        </>
    );
}
export default ListProduct;