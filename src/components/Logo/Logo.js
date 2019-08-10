import React from 'react';
import logoPath from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoPath} alt="MyBurger" />
  </div>
);

export default logo;
