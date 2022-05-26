import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

// Mount function to start the app
const mount = (el, {onNavigate, defaultHistory}) => {
    const history = defaultHistory || createMemoryHistory();

    if(onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        onParentNavigation({pathname: nextPathName}) {
            const {pathname} = history.location;
            if(pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    }
}

// If we in development mode and in isolation, call mount immediatly
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth_dev_root')
    if(devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()})
    }
}

// We are running through the container and we should export the mount function
export {mount};