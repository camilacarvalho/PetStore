
import React, { useState, useEffect } from 'react';

function Page(props) {

    const [pageNumber, setPageNumber] = useState(1);

    var previousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    var nextPageEnable = () => {
        return props.products.length > props.limite;
    }

    ///////////////

    useEffect(() => {
        pageList();
    })

    var previousPageEnable = () => {
        return pageNumber > 1;
    }

    var indexFinishList = () => {
        return (props.limite * pageNumber);
    }

    var indexInitList = () => {
        return props.limite * (pageNumber - 1);
    }

    var nextPage = () => {
        setPageNumber((pageNumber + 1));
        pageList();
    }

    var previousPage = () => {
        setPageNumber((pageNumber - 1));
        pageList();
    }

    var pageList = () => {
        var indexInit = indexInitList();

        var indexFinish = indexFinishList();

        var list = props.products.slice(indexInit, indexFinish);
        props.pageFunction(list);
    }

    return (
        <>
            <div className="dropdown-divider"></div>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    {previousPageEnable() ? (<li className="page-item active">
                        <a className="page-link" onClick={() => previousPage()}>Previous</a>
                    </li>) : (
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>)}

                    {nextPageEnable() ? (<li className="page-item active">
                        <a className="page-link" onClick={() => nextPage()}>Next</a>
                    </li>) : (<li className="page-item disabled">
                        <a className="page-link" href="#">Next</a>
                    </li>)}
                </ul>
            </nav>
        </>
    );
}
export default Page;



