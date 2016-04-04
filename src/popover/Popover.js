import React, {Component} from 'react';
import classNames from 'classnames';

export default class Popover extends Component {
    static get CLASSES() {
        return ['popover'];
    }

    static get ARROW_CLASSES() {
        return ['popover-arrow'];
    }

    render() {
        const {direction} = this.props;
        const directionClass = `popover-${direction}`;

        const classes = classNames(Popover.CLASSES, this.props.className, directionClass);
        const arrowClasses = classNames(Popover.ARROW_CLASSES);

        console.log(classNames('foo', {foo: true, bar: true}));

        return (
            <div className={classes}>
                <div className={arrowClasses}></div>
                {this.props.children}
            </div>
        );
    }
}
