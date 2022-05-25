import React from "react";
import { SimpleContext } from "./simpleContext";

const ComponentC = () => {
  return (
    <SimpleContext.Consumer>
      {(frase) => {
        return <div>Hello: {frase}</div>;
      }}
    </SimpleContext.Consumer>
  );
};

export default ComponentC;
