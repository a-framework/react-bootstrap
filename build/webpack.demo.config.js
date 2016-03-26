const PATH = require('path');

const webpack = require('webpack');

const ROOT = '../';

const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'src/');
const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, `dist/demo/js/`);

const DEMO_FOLDER = PATH.resolve(__dirname, ROOT, 'demo/');
const DEMO_ENTRY_FILE = PATH.resolve(DEMO_FOLDER, 'index.js');

module.exports = {
    cache: true,
    profile: false,
    devtool: 'inline-source-map',
    debug: true,    
    bail: true,
    entry: {
        demo: [
            DEMO_ENTRY_FILE
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': 'window'
    },
    output: {
        path: BUILD_FOLDER,
        filename: '[name].js',
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, include: [SRC_FOLDER, DEMO_FOLDER], loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.html$/, loader: 'file', query: {name: '../[name].[ext]'}
            },
            {
                test: /\.css$/, loader: 'file', query: {name: '../css/[name].[ext]'}
            },
            {
                test: /\.js$/, 
                include: [SRC_FOLDER, DEMO_FOLDER], loader: ["babel"],
                query: {compact: false, cacheDirectory: true}
            }
        ]
    },
    plugins: [     
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', filename: 'vendor.js'
        }),
        new webpack.NoErrorsPlugin()
    ]
};
