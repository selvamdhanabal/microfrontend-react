import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import { Switch, Router, Route } from "react-router-dom";

// import Landing from './components/Landing'
// import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        
                    </Switch>
                </Router>
        </StylesProvider>
    </div>
}
