import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './App';
import Home from './Home';
import NoMatch from './NoMatch';

const Tabs = (location, cb) => {
    System.import('./components/Tabs').then((module) => {
        cb(null, module.default);
    }).catch((err) => {
        console.error(err);
    });
};

const Collapse = (location, cb) => {
    System.import('./components/Collapse').then((module) => {
        cb(null, module.default);
    }).catch((err) => {
        console.error(err);
    });
};

const Popover = (location, cb) => {
    System.import('./components/Popover').then((module) => {
        cb(null, module.default);
    }).catch((err) => {
        console.error(err);
    });
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="tabs" getComponent={Tabs} />
        <Route path="collapse" getComponent={Collapse} />
        <Route path="popover" getComponent={Popover} />
        <Route path="*" component={NoMatch} />
    </Route>
);         
