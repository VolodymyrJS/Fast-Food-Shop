import React from 'react';
import Helper from '../../../HOC/Helper';

const OrderSummury = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {ingKey}: {props.ingredients[ingKey]}
        </span>
      </li>
    );
  });

  return (
    <Helper>
      <h3>Your Order</h3>
      <p>Your delitious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Helper>
  );
};

export default OrderSummury;
