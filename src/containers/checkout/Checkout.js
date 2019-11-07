import React, { Component } from "react";
import CheckoutOrderSummary from "../../components/CheckoutOrder/CheckoutOrderSummary/CheckoutOrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

class Checkout extends Component {

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
          ingredients={this.props.ings}
          continueOrderHandle={this.continueOrderHandle}
          cancelOrderHandler={this.cancelOrderHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <CheckoutForm
              ingredients={this.props.ings}
              price={this.props.price}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
};

export default connect(mapStateToProps)(Checkout);
