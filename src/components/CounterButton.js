import React, {Component} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
      <button
        id='counter'
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Increase Counter
      </button>
      <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default CounterButton