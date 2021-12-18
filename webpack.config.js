const path = require('path');

module.exports = {
    mode:'development',
    devtool: 'eval-source-map',
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'index.js'
    },
};