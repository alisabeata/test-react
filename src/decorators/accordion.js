import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openItemId: props.defaultOpenId
  //   };
  // }

  state = {
    openItemId: this.props.defaultOpenId
  };

  toggleOpenItem = (openItemId) => (env) => {
    this.setState({
      openItemId: (openItemId == this.state.openItemId) ? null : openItemId
    });
  }

  render() {
    return <OriginalComponent {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem} />
  }
}