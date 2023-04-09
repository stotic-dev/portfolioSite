const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    //Moduleの設定
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    //webpack-dev-severの設定
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
          },
        open: true,
        port: 3000,
    },
}