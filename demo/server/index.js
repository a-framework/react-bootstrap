// Allow ES6. It doesn't affect the file
// in which it is executed.
// Relies on .babelrc file being somewhere in folder hierarchy.
require('babel-core/register');

// Load main server file.
require('./server');
