const PATH = require('path');

const webpack = require('webpack');

const ROOT = '../';

const DEMO_FOLDER = PATH.resolve(__dirname, ROOT, 'demo/');
const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'src/');

const DEMO_ENTRY_FILE = PATH.resolve(DEMO_FOLDER, 'index.js');
const DEMO_HTML_FILE = PATH.resolve(DEMO_FOLDER, 'index.html');
const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, `dist/`);
const PUBLIC_PATH = '/assets/js/';

module.exports = {
    cache: true,
    profile: false,
    devtool: 'inline-source-map',
    debug: true,    
    bail: true,
    entry: {
        demo: [
            'webpack-dev-server/client?http://localhost:8080/', 
            'webpack/hot/dev-server',
            DEMO_ENTRY_FILE,
            DEMO_HTML_FILE
        ]
    },
    output: {
        path: BUILD_FOLDER,
        publicPath: PUBLIC_PATH,
        filename: '[name].js',
        pathinfo: false
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, include: [SRC_FOLDER, DEMO_FOLDER], loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.html$/, loader: 'file', query: {name: '[name].[ext]'}
            },
            {
                test: /\.js$/, include: [SRC_FOLDER, DEMO_FOLDER], loader: ["babel"],
                query: {compact: false, cacheDirectory: true}
            }
        ]
    },
    plugins: [     
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: 'demo/',
        historyApiFallback: {
            index: '/'
        }
    }
};
