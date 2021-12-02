import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ol></ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            <p>Total calories: {calories.toFixed()}. Suitable for {(calories/1000).toFixed()} meals.</p>
            <img src={image} alt="" align = "center"/>
        </div>
    );
};

export default Recipe;