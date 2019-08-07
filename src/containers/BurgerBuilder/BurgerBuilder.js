import React from 'react';
import Helper from '../../HOC/Helper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    console.log(oldCount);
  };

  removeIngredientHandler = () => {};

  render() {
    return (
      <Helper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls add={() => this.addIngredientHandler()} />
      </Helper>
    );
  }
}

export default BurgerBuilder;
