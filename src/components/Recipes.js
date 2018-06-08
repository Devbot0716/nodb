import React, { Component } from 'react';
import axios from 'axios';

const Recipes = (props) => {
    const content = props.recipe ? (
        <div className='recipeInfo'>
            <h1>{props.recipe.title}</h1>
            <img className='food_pic' src={props.recipe.image_url} alt={props.recipe.title} />
            
            <p className="recipeCard">{props.recipe.ingredients}</p>
            <div>
                <h4>Recipe by "{props.recipe.publisher}"</h4>
                <h6>
                <a className='source_site' target="_blank" href={props.recipe.source_url}>Go to {props.recipe.publisher}'s site!</a>
                </h6>
            </div>
        </div>
    ) : (
        <div>
            <p classname="preText">Click the button below to get your recipe!</p>
        </div>
    )

    return(
        <div>
            { content }
        </div>
    )
}

export default Recipes;