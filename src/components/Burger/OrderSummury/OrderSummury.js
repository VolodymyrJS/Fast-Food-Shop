import React from 'react';
import Helper from '../../../HOC/Helper';
import Button from '../../UI/Button/Button';

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
      <p>Your delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Helper>
  );
};

export default OrderSummury;
