import React, {Component, Children, PropTypes} from 'react';

import Tab from './Tab';
import Pane from './Pane';

export default class Tabs extends Component {
    static get propTypes() {
        return {
            activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        };
    }

    constructor(props) {
        super(props);
        this.state = {activeTab: Number(props.activeTab) || 0};
    }

    createSelectHandler(key) {
        return () => {
            this.setState({activeTab: key});               
        };
    }

    createTab(tab, key) {
        const uniqueKey = `tab_${key}`;
        const enhancedTab = React.cloneElement(tab, {
            active: (this.state.activeTab === key)
        });

        return (
            <li className="nav-item" key={uniqueKey} onClick={this.createSelectHandler(key)}>
                {enhancedTab}
            </li>
        );
    }

    createPane(pane, key, amountOfTabs) {
        const uniqueKey = `pane_${key}`;

        return React.cloneElement(pane, {
            active: (this.state.activeTab === key - amountOfTabs),
            key: uniqueKey
        });
    }

    processChildren(children) {
        const tabs = [];
        const panes = [];

        Children.forEach(children, (child, index) => {
            if (child.type === Tab) {
                const tab = this.createTab(child, index);
                tabs.push(tab);
            } else if (child.type === Pane) {
                const pane = this.createPane(child, index, tabs.length);
                panes.push(pane);
            }
        });

        return {tabs, panes};
    }

    render() {
        const {tabs, panes} = this.processChildren(this.props.children);

        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabs}
                </ul>
                <div className="tab-content">
                    {panes}
                </div>
            </div>
        );
    }
}
