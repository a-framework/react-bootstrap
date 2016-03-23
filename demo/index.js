import React from 'react';
import {render} from 'react-dom';

import {Popover} from '../src';

render((
    <Popover>
        <h3>Title</h3>
        <p>
            Content
        </p>
    </Popover>
), document.querySelector('[data-ui-role="content"]'));
