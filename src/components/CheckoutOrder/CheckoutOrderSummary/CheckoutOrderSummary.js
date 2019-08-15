import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutOrderSummary.module.css";

const checkoutOrderSummary = props => {
  return (
    <div className={classes.CheckoutOrderSummary}>
      <h1>We hope it tested :)</h1>
      <Burger ingredients={props.ingredients} />
      <Button btnType="Danger" clicked={props.cancelOrderHandler}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continueOrderHandle}>
        CHECKOUT
      </Button>
    </div>
  );
};

export default checkoutOrderSummary;
