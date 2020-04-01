import React,{useState} from 'react';
function FilterProduct(props) {
    var optionDefault=props.optionDefault;
const [select, setSelect]=useState(optionDefault);

var handleChange=(event)=> {
   setSelect(event.target.value);
   props.functionFilter("category", event.target.value)
}
    return (
        <form>
            <div className="form-group">
                <br />
                <label for="exampleFormControlSelect1">Filtrar por {props.name}:</label>
                <select className="form-control" id="exampleFormControlSelect1" value={select} onChange={handleChange}>>
                <option value={optionDefault.value}>{optionDefault.text}</option>
                    {
                        props.categories.map((category, index) => {
                            return (
                                <option key={index} value={category}>{category}</option>
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

