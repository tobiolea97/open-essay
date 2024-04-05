import "./index.css";
import React from 'react'
import { RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './data/api/Store'
import router from './routes/router'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

