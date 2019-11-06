import React from "react";
import Helper from "../../HOC/Helper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummury from "../../components/Burger/Order/OrderSummary/OrderSummury";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseble: false,
    purchasing: false,
    loading: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({ purchaseble: sum > 0 });
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasingContinutHandler = () => {
    const queryParams = [];

    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams
      .join("&")
      .replace(
        /(\w+=\d{1})&(\w+=\d{1})&(\w+=\d{1})&(\w+=\d{1})/g,
        "$4&$3&$2&$1"
      );

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let burger = <Spinner />;
    let orderSummury = null;

    if (this.props.ings) {
      burger = (
        <Helper>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onAddIngredient}
            ingredientRemoved={this.props.onRemoveIngredient}
            price={this.props.price}
            isDisabled={disableInfo}
            purchaseble={this.state.purchaseble}
            ordered={this.purchasingHandler}
          />
        </Helper>
      );
      orderSummury = (
        <OrderSummury
          ingredients={this.props.ings}
          purchaseCanceled={this.purchasingCancelHandler}
          purchaseContinued={this.purchasingContinutHandler}
          price={this.props.price}
        />
      );
    }
    if (this.state.loading) {
      orderSummury = <Spinner />;
    }

    return (
      <Helper>
        <Modal
          show={this.state.purchasing}
          hideModalOrder={this.purchasingCancelHandler}
        >
          {orderSummury}
        </Modal>
        {burger}
      </Helper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (igs) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: igs}),
    onRemoveIngredient: (igs) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: igs})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
