import React from 'react';
import Helper from '../../HOC/Helper';

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Helper>
        <div>Burger area</div>
        <div>Burger parts</div>
      </Helper>
    );
  }
}

export default BurgerBuilder;
