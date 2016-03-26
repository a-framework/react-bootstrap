const PATH = require('path');

const webpack = require('webpack');

const ROOT = '../';

const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'src/');
const SRC_ENTRY_FILE = PATH.resolve(SRC_FOLDER, 'index.js');
const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, `dist/`);


module.exports = {
    cache: true,
    profile: false,
    devtool: 'inline-source-map',
    debug: true,    
    bail: true,
    entry: {
        lib: [
            SRC_ENTRY_FILE
        ]
    },
    externals: {
        'react': {
            root: "React",
            commonjs2: 'react',
            commonjs: 'react',
            umd: 'react',
            amd: 'react'
        }
    },
    output: {
        path: BUILD_FOLDER,
        filename: '[name].js',
        library: 'ReactBootstrapLib',
        libraryTarget: 'umd'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, include: [SRC_FOLDER], loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/, 
                include: [SRC_FOLDER], loader: ["babel"],
                query: {compact: false, cacheDirectory: true}
            }
        ]
    },
    plugins: [ 
        new webpack.NoErrorsPlugin()
    ]
};
