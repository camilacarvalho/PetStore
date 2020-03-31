import React from 'react';
function FilterProduct(props) {

    return (
        <form>
            <div className="form-group">
                <br />
                <label for="exampleFormControlSelect1">Filtrar por {props.name}:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    {
                        props.categories.map(category => {
                            return (
                                <option>{category}</option>
                            );
                        })
                    }
                </select>
                <br />
                <br />
            </div>
        </form>
    );
}
export default FilterProduct;

