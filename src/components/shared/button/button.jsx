import React from 'react'
import './button.css'

export default props =>
    <button
        onClick={e => props.click(props.amount, props.index)}
        className='button'>{props.label}</button>