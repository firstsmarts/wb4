const path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'test.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        open: true,
        historyApiFallback: true
    }
}