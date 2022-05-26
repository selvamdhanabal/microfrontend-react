const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const PackageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederation({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp' : './src/bootstrap'
            },
            shared: PackageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)