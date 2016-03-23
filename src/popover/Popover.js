import React, {Component} from 'react';

export default class Popover extends Component {
    static get propTypes() {
        return {
            children: React.PropTypes.node
        };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
