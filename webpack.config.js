const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const htmlPluginConf = new htmlPlugin({
    filename: 'index.html',
    template: './src/index.html',
})

module.exports = {
    mode: 'development',
    entry: "./src/index",
    output: {
        filename: "JS/bundle.js",
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts | tsx)&/,
                use: 'ts-loader'
            },
        ]
    },
    resolve: {
      extensions: ['.js','.jsx','.ts','.tsx'],
    },
    devServer : {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        port: '3000',
    },
    plugins: [
        htmlPluginConf,
    ]
}