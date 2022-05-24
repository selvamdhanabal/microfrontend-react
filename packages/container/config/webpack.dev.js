const {merge} = require('webpack-merge')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const PackageJson = require('../package.json')

const commonConfig = require('./webpack.common')

const devConfig =  {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederation({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: PackageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)