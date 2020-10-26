import React from 'react';
import ItemProduct from './item-product';

function RowProducts({key, numberRow, isDescription, products, buttonAction1, buttons, favoriteActionButton, isCategory, isRating, isFavorite}) {

    const products_list = products;

    return (
        <>
            <div className="card-group">
                {(products_list).map((product, index) => {
                    return (
                        <ItemProduct 
                        key={index} 
                        isDescription={isDescription} 
                        buttonAction1={buttonAction1} 
                        buttons={buttons} 
                        favoriteActionButton={favoriteActionButton} 
                        isCategory={isCategory} 
                        isRating={isRating}
                        isFavorite={isFavorite} 
                        product={product} />
                    );
                })}

                { (products.length < numberRow) ? 
                <> {Array(numberRow - products.length).fill().map((x) => <div className="card"></div>)} </>
                :
                <></>
                }               
            </div>
        </>
    );
}

export default RowProducts;