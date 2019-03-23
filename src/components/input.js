import React from 'react'
import '../index.css'

const Input = (type, className, onChange, ...props) => (
    <>
        <label htmlFor={props.name}>{props.labelTxt}</label>
        <input type={type}
            className={className}
            onChange={onChange}
        />
    </>
);

export default Input; 