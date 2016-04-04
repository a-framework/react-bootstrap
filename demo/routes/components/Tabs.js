import React, {Component} from 'react';
import {Tabs, Tab, Pane} from '../../../src';

const css = `
    .nav-tabs {
        margin-bottom: 1rem;
    }

    .btn.nav-link:focus {
        outline: 0;
    }
`;

export default class TabsRoute extends Component {
    constructor() {
        super();

        this.onClick = this.handleClick.bind(this);
        this.state = {a: 0};
    }

    handleClick() {
        this.setState({a: this.state.a + 1});
    }

    render() {
        return (
            <div>
                <style>{css}</style>
                <Tabs>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                    <Pane>
                        <p>
                            Lorem ipsum... 1
                        </p>
                    </Pane>
                    <Pane>
                        <p>
                            Lorem ipsum... 2
                        </p>
                    </Pane>
                </Tabs>
            </div>
        );
    }
}
