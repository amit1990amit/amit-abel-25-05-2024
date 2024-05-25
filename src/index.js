import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore,  applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
