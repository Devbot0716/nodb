import React, { Component} from 'react';
import Recipes from './Recipes';
const Button = (props) => {
    return (
        <button className="button" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;