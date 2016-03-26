const browserSync = require("browser-sync").create();
const PATH = require('path');

const ROOT = '../../';
const DEMO_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/demo/');

browserSync.init({
    port: 3000,
    browser: [],
    notify: false,
    online: false,
    logConnections: true,
    files: [
       DEMO_FOLDER
    ],
    proxy: 'http://localhost:3002'
});