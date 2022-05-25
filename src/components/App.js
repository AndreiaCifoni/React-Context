import React from "react";
import ComponentB from "./ComponentB";
import { SimpleContext } from "./simpleContext";

const App = () => {
  return (
    <SimpleContext.Provider value={"I am a simple context"}>
      <ComponentB />
    </SimpleContext.Provider>
  );
};

export default App;
