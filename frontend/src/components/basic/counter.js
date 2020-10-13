import React from 'react';
import NumericInput from 'react-numeric-input';

function Counter({name, className, label, onChange, min, precision, step, value}) {
    return (
        <>
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">{label}</label>
                        <NumericInput name={name} className={className} onChange={onChange} type="number" step={step} value={value} min={min} precision={precision} pattern="[0-9]+" />
        </>
    )}
export default Counter;