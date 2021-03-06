import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "./container/Main";
import reducer from "./store/reducer";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
