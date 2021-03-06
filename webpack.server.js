const nodeExternals = require('webpack-node-externals')
const path = require('path')

let config = {
    entry: './src/server',
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map'
}

module.exports = config;