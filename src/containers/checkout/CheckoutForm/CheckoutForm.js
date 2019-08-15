import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";

class CheckoutForm extends Component {
  state = {
    name: "",
    imail: "",
    address: {
      street: "",
      postalcode: ""
    }
  };
  render() {
    return (
      <div className={classes.CheckoutForm}>
        <h2>Checkout Form</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your E-Mail" />
        <input type="text" placeholder="Your Post Code" />
        <Button btnType="Success">ORDER</Button>
      </div>
    );
  }
}

export default CheckoutForm;
