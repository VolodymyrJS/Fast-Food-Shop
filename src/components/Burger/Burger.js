import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let modifiedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (modifiedIngredients.length === 0) {
    modifiedIngredients = <div>Please start adding ingredients.</div>;
  }
  console.log(modifiedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {modifiedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
