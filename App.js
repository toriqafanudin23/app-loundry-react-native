import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./store";
import AppWrapper from "./AppWrapper";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
