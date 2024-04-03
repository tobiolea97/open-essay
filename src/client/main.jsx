import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from "./App";
import store from './api/Store'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
