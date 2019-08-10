import React from 'react';
import classes from './Backdrop.module.css';

const backDrop = props =>
  props.show ? (
    <div onClick={props.hideModalOrder} className={classes.Backdrop} />
  ) : null;

export default backDrop;
