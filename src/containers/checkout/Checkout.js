import React, { Component } from "react";
import CheckoutOrderSummary from "../../components/CheckoutOrder/CheckoutOrderSummary/CheckoutOrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Route } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  continueOrderHandle = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  cancelOrderHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className={{ width: "100%", textAlign: "center" }}>
        <CheckoutOrderSummary
          ingredients={this.state.ingredients}
          continueOrderHandle={this.continueOrderHandle}
          cancelOrderHandler={this.cancelOrderHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={CheckoutForm}
        />
      </div>
    );
  }
}

export default Checkout;
