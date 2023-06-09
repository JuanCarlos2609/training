import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p> clicks: {this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
