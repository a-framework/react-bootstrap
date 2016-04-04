import React, {Component} from 'react';
import {Popover, PopoverTitle, PopoverContent} from '../../../src';

const css = `
    .container {
        position: relative
    }

    .popover {
        top: -4rem;
        left: 5.375rem;
        border-bottom-color: rgba(0,0,0,.25);
    }
`;

export default class PopoverRoute extends Component {
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
                <div className="container">
                    <button className="btn btn-secondary btn-sm">Trigger But Longer</button>
                    <Popover direction="bottom">
                        <PopoverTitle>Popover bottom</PopoverTitle>
                        <PopoverContent>
                            <p>
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. 
                                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </p>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        );
    }
}
