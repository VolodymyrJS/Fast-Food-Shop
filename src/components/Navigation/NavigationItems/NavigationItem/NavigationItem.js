import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = props => (
  <div className={classes.NavigationItem}>{props.children}</div>
);

export default navigationItem;
