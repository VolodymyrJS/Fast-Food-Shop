import React from 'react';
import classes from './Modal.module.css';
import Helper from '../../../HOC/Helper';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Helper>
    <Backdrop show={props.show} hideModalOrder={props.hideModalOrder} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Helper>
);

export default modal;
