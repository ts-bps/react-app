import * as React from "react";

export class Counter extends React.Component<{ count: number }> {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <button
          className="increment"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          ++
        </button>
        <button
          className="decrement"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          --
        </button>
      </div>
    );
  }
}
