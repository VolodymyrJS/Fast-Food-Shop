import React from 'react';
import Helper from '../../HOC/Helper';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  return (
    <Helper>
      <Toolbar />
      <main className={classes.layoutSetings}>{props.children}</main>
    </Helper>
  );
};

export default layout;
