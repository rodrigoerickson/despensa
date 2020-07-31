import React from 'react'
import './button.css'

export default props =>
    <button
        onClick={e => props.click(props.subSection, props.index, props.sectionId)}
        className='button'>{props.label}</button>