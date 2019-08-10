import React from 'react';
import classes from './NavigationItem.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <div className={classes.NavigationItems}>
    <ul>
      <NavigationItem>Link 1</NavigationItem>
      <NavigationItem>Link 2</NavigationItem>
    </ul>
  </div>
);

export default navigationItems;
