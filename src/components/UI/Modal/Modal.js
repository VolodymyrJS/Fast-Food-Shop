import React from "react";
import classes from "./Modal.module.css";
import Helper from "../../../HOC/Helper";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Helper>
        <Backdrop
          show={this.props.show}
          hideModalOrder={this.props.hideModalOrder}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Helper>
    );
  }
}

export default Modal;
