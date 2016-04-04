import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './routes/routes';

import './index.html';
import './css/bootstrap.css';

render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.querySelector('[data-ui-role="content"]'));

