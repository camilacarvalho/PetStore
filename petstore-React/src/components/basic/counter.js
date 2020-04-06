import React from 'react';
import NumericInput from 'react-numeric-input';

function Counter(props) {
    return (
        <>
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">{props.label}</label>
                        <NumericInput name={props.name} className={props.className} onChange={props.onChange} type="number" step={props.step} value={props.value} min={props.min} precision={props.precision} pattern="[0-9]+" />
        </>
    )}
export default Counter;