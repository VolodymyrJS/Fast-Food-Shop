import React from "react";
import classes from "./Order.module.css";

const order = props => {
  console.log(props);
  const ingredients = [];

  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName]
    });
    console.log(ingredientsName);
  }

  const ingredientsOutput = ingredients.map(ig => {
    return (
      <span key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });

  //console.log(ingredientsOutput);

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: {props.price.toFixed(2)}</p>
    </div>
  );
};

export default order;
