import React, { Component } from "react";

export default OriginalComponent =>
  class ToggleOpen extends Component {
    static defaultProps = {
      defaultOpen: false
    };

    state = {
      isOpen: this.props.defaultOpen
    };

    toggleOpen = () => {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen // false -> true
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
