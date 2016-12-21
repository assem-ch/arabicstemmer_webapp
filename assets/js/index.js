import React from "react";
import ReactDom from "react-dom";
import AppStem from './components/AppStem'
import { Provider } from 'react-redux'

import store from './store';




const appStemHTML = document.getElementById("stemApp")

ReactDom.render(
        <Provider store={store}>
        <AppStem />
        </Provider>,
       appStemHTML
   )










