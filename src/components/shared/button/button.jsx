import React from 'react'
import './button.css'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Button = props =>
    <button
        onClick={e => props.click(props.variables)}
        variables={props.variables}
        className='button btn'>
            {props.label}
        </button>


const ButtonAiFillPlusCircle = props =>{
    const label = <AiFillPlusCircle className="icon-button" />
        return <Button
            click={props.click}
            variables={props.variables}
            label={label}>
            </Button>
}

const ButtonAiFillMinusCircle = props =>{
    const label = <AiFillMinusCircle className="icon-button" />
        return <Button
            click={props.click}
            variables={props.variables}
            label={label}>
            </Button>
}

export default Button 
export {ButtonAiFillPlusCircle,ButtonAiFillMinusCircle}