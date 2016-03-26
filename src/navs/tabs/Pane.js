import React, {Component} from 'react';
import classNames from 'classnames';

export default class Pane extends Component {
    static get CLASSES() {
        return ['tab-pane'];
    }

    render() {
        const {active, disabled} = this.props;
        const classes = classNames(Pane.CLASSES, this.props.className, {active, disabled});

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
