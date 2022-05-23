import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Mount function to start the app
const mount = (el) => {
    console.log('first')
    ReactDOM.render(
        <App />,
        el
    )
}

// If we in development mode and in isolation, call mount immediatly
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing_dev_root')
    console.log(devRoot)
    if(devRoot) {
        mount(devRoot)
    }
}

// We are running through the container and we should export the mount function
export {mount};