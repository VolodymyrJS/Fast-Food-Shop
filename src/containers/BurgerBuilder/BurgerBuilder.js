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
    return sum > 0;
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasingContinutHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disableInfo = {
      ...this.props.ings
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
            purchaseble={this.updatePurchaseState(this.props.ings)}
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
