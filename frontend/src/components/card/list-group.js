import React from 'react';

function ListGroup({list}) {
    return (
        <>
            <ul className="list-group list-group-flush">
                {list.map((item) => {
                    return (
                        <li className="list-group-item">{item}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default ListGroup;