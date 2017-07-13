import React from "react";
import { Provider } from "react-redux";

const Root = ({store}) => (
  <Provider store={store}>
    <div><h1>Gotta Catch Em All! POKEMON!</h1></div>
  </Provider>
);

export default Root;
