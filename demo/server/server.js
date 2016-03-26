const PATH = require('path');
const FS = require('fs');

const express = require('express');

const morgan = require('morgan');
const compression = require('compression');
const modRewrite = require('connect-modrewrite');

const ROOT = '../../';
const app = express();

app.use(morgan('dev'));
app.use(compression());
app.use((req, res, next) => {
    if (req.url.indexOf('vendor.js') < 0) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');  
    }

    res.header('Access-Control-Allow-METHODS', 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

    next();
});

const PUBLIC_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/demo/');
const INDEX_HTML = PATH.resolve(PUBLIC_FOLDER, 'index.html')

const pageRouter = express.Router();

pageRouter.get('/', (req, res, next) => {
    res.sendFile(INDEX_HTML);
});

app.use('/', pageRouter);    

const apiRouter = express.Router();

app.use('/api', apiRouter); 

app.use(modRewrite([
    '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /assets/index.html'
]));

app.use('/assets', express.static(PUBLIC_FOLDER));

app.listen(3002, () => {
    console.log('Listening on http://localhost:3002');    
});
