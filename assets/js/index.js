import React from "react";
import ReactDom from "react-dom";
import App from './components/App'
import { Provider } from 'react-redux'

import store from './store';




const appStemHTML = document.getElementById("stemApp")

ReactDom.render(
        <Provider store={store}>
        <App />
        </Provider>,
       appStemHTML
   )










