import React from 'react';
import ListButtonsCard from './list-buttons-card';
import InfoBodyCard from './info-body-card';

function ItemCard(props) {

    return (
        <>
            <div className={props.column.image}>
                <img className={props.image.className} src={props.image.src} alt={props.image.alt} style={props.image.style} />
            </div>
            <div className={props.column.body}>
                <InfoBodyCard
                    product={props.product}
                    description={props.description}
                    list={props.list}
                />

                <ListButtonsCard
                    item={props.item}
                    buttonAction1={props.buttonAction1}
                    buttonAction2={props.buttonAction2}
                    buttons={props.buttons}
                />
            </div>
        </>
    )

}

export default ItemCard;