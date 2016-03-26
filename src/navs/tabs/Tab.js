import React, {Component} from 'react';
import classNames from 'classnames';

export default class Tab extends Component {
    static get CLASSES() {
        return ['btn', 'btn-link', 'btn-sm', 'nav-link'];
    }

    render() {    
        const {active, disabled} = this.props;
        const classes = classNames(Tab.CLASSES, this.props.className, {active, disabled});

        return (
            <button className={classes}>{this.props.children}</button>
        );
    }
}
