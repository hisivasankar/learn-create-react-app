import React, {Component} from 'react';

import {sayHello} from '../api/Utils';

export class Welcome extends Component {
    render() {
        let sMessage = sayHello({ name: this.props.name});
        return (
            <div className="welcome">{sMessage}</div>
        );
    }
}