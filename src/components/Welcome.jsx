import React, {Component} from 'react';
export class Welcome extends Component {
    render() {
        return (
            <div className="welcome">Welcome {this.props.name}!</div>
        )
    }
}