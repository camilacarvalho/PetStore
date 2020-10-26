import React from 'react';
import RowProducts from './row-products'

function ListProduct({buttons, buttonAction1, numberRow, isDescription, isCategory, isRating, isFavorite, favoriteActionButton, products}) {
    let products_list = [];
 
    var prepareProductListByLine = () => {
        const size = products.length;
        const quantList = Math.ceil(size / numberRow);
        let indexProduto = 0;
        for (let index = 0; index < quantList; index++) {
            let products1 = [];
            products1.push(products[indexProduto]);
            indexProduto++;
            const value = numberRow - 1;
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