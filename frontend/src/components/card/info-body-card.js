import React from 'react';
import ListGroup from './list-group';

function InfoBodyCard(props) {
    return (<>
        <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            {props.description}
        </div>
        <ListGroup list={props.list} />
    </>)
} export default InfoBodyCard;