import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Tabs from './Tabs';

export const configureRoutes = function () {
    return (
        <Route path="/" component={App}>
            <Route path="tabs" component={Tabs} />
        </Route>
    );         
};

export default configureRoutes();
