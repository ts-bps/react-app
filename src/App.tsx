import * as React from "react";

import { Counter } from "./Counter";

export const Hello: React.StatelessComponent<{ name: string }> = ({ name }) => {
  return <div className="hello">Hello {name}</div>;
};

Hello.defaultProps = {
  name: "world"
};
export const HelloWorld: React.StatelessComponent<{}> = () => (
  <div className="helloWorld">
    <Hello name="world" />
    <Counter />
  </div>
);
