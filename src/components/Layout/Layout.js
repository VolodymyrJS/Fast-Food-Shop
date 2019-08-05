import React from 'react';
import Helper from '../../HOC/Helper';
import classes from './Layout.module.css';

const layout = props => {
  return (
    <Helper>
      <div>Toolbar Sidedrawer Backdrop</div>
      <main className={classes.layoutSetings}>{props.children}</main>
    </Helper>
  );
};

export default layout;
