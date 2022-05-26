import React from "react";
import ReactDOM from "react-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/pricing' component={Pricing} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </BrowserRouter>
        </StylesProvider>
    </div>
}
