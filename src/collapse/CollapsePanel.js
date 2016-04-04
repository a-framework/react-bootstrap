import React, {Component} from 'react';
import classNames from 'classnames';

export default class CollapsePanel extends Component {
    static get CLASSES() {
        return ['panel panel-default'];
    }

    render() {
        const {active, disabled} = this.props;
        const classes = classNames(CollapsePanel.CLASSES, this.props.className, {active, disabled});

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
