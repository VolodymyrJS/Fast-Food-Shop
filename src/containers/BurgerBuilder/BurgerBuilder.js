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
  render() {
    return (
      <Helper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Helper>
    );
  }
}

export default BurgerBuilder;
