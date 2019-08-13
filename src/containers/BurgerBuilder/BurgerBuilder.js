import React from "react";
import Helper from "../../HOC/Helper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummury from "../../components/Burger/OrderSummury/OrderSummury";
import axios from "../../axios-order";

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.7,
  meat: 1.6,
  bacon: 1.8
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 4,
    purchaseble: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    const priceSubraction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubraction;
    updatedIngredients[type] = updatedCount;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
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
    const orderData = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
    axios
      .post("/orders.json", orderData)
      .then(request => console.log(request))
      .catch(err => console.log(err));
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Helper>
        <Modal
          show={this.state.purchasing}
          hideModalOrder={this.purchasingCancelHandler}
        >
          <OrderSummury
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchasingCancelHandler}
            purchaseContinued={this.purchasingContinutHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          isDisabled={disableInfo}
          purchaseble={this.state.purchaseble}
          ordered={this.purchasingHandler}
        />
      </Helper>
    );
  }
}

export default BurgerBuilder;
