
import React from 'react';
function Page(props) {

    var nextPageEnable = () => {
        return props.quantProduct > props.limite;
    }

    return (
        <>
            <div className="dropdown-divider"></div>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    {nextPageEnable() ? (<li className="page-item active">
                        <a className="page-link" href="#">Next</a>
                    </li>) : (<li className="page-item disabled">
                        <a className="page-link" href="#">Next</a>
                    </li>)}
                </ul>
            </nav>
        </>
    );
}
export default Page;



