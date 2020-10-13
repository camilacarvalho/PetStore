import React from 'react';
import ListGroup from './list-group';

function InfoBodyCard({product, description, list}) {
    return (<>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            {description}
        </div>
        <ListGroup list={list} />
    </>)
} export default InfoBodyCard;