const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}