import React, { Component } from "react";
import CheckoutOrderSummary from "../../components/CheckoutOrder/CheckoutOrderSummary/CheckoutOrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Route } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, price: price });
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
          render={() => (
            <CheckoutForm
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
