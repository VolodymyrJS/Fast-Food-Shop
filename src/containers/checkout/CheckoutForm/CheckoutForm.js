import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./CheckoutForm.module.css";
import axios from "../../../axios-order";
import { withRouter } from "react-router-dom";

class CheckoutForm extends Component {
  state = {
    name: "",
    imail: "",
    address: {
      street: "",
      postalcode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    const orderData = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      deliveryMethod: "fastest",
      customer: {
        name: "Vlad",
        email: "p.v.v1313@gmail.com",
        address: {
          country: "Ukraine",
          street: "Molodogvardeyska 32",
          zipcode: 54000
        }
      }
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", orderData)
      .then(request => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form className={classes.CheckoutForm}>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your E-Mail" />
        <input type="text" placeholder="Your Post Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div>
        <h2>Checkout Form</h2>
        {form}
      </div>
    );
  }
}

export default withRouter(CheckoutForm);
