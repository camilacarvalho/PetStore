import React from 'react';
import RowProducts from './row-products'

function ListProduct({buttons, buttonAction1, numberRow, isDescription, isCategory, isRating, isFavorite, favoriteActionButton, products}) {
    var products_list = [];
 
    var prepareProductListByLine = () => {
        var size = products.length;
        var quantList = Math.ceil(size / numberRow);
        var indexProduto = 0;
        for (let index = 0; index < quantList; index++) {
            var products1 = [];
            products1.push(products[indexProduto]);
            indexProduto++;
            var value = numberRow - 1;
            for (let index = 0; index < value; index++) {
                if (products[indexProduto]) {
                    products1.push(products[indexProduto]);
                    indexProduto++;
                }
            }
            products_list.push(products1);
        }
    }

    return (
        <>
            {prepareProductListByLine()}
            {
                products_list.map((product, index) => {
                    return (
                        <RowProducts 
                        key={index} 
                        numberRow={numberRow} 
                        isDescription={isDescription} 
                        products={product} 
                        buttonAction1={buttonAction1}  
                        buttons={buttons} 
                        favoriteActionButton={favoriteActionButton} 
                        isCategory={isCategory} 
                        isRating={isRating} 
                        isFavorite={isFavorite} />

                    );
                })
            }

        </>
    );
}
export default ListProduct;