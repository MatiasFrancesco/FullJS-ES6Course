const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer:{
        port: 3000,
        static: path.resolve(__dirname, 'build') 
    }
};