const path = require('path');

module.exports ={
    entry: './src/index.js',
    output: {
        path: __dirname+ '/dist'+ '/scripts',
        filename:'bundle.js'
    },
    devServer:{
        contentBase: './src',
        port:4200
    }
}
