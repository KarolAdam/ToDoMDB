const path = require("path");

module.exports = {
    mode: 'development',
    entry: ['whatwg-fetch', './src/js/app.jsx'],
    output: {path: path.join(__dirname, "./dist/js/"), filename: 'out.js'},
    watch: true,
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [{
            test: /\.jsx$/, exclude: /node_modules/,
            loader: 'babel-loader',
            query: {presets: ['es2015', 'stage-2', 'react']}
        }]
    }
};

