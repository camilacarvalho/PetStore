import React from 'react';
import ListButtonsCard from './list-buttons-card';
import InfoBodyCard from './info-body-card';

function ItemCard({image, column, product, description, list, buttonAction1, buttonAction2, item, buttons}) {
 
    return (
        <>
            <div className={column.image}>
                <img className={image.className} src={image.src} alt={image.alt} style={image.style} />
            </div>
            <div className={column.body}>
                <InfoBodyCard
                    product={product}
                    description={description}
                    list={list}
                />

                <ListButtonsCard
                    item={item}
                    buttonAction1={buttonAction1}
                    buttonAction2={buttonAction2}
                    buttons={buttons}
                />
            </div>
        </>
    )

}

export default ItemCard;