import React from 'react';

function ListGroup(props) {
    return (
        <>
            <ul className="list-group list-group-flush">
                {props.list.map((item) => {
                    return (
                        <li className="list-group-item">{item}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default ListGroup;