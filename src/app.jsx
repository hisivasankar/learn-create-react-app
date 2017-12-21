import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Welcome} from './components/Welcome';
import ColorBox from './components/ColorBox';

var rootNode = document.getElementById('app');

class App extends Component {
    render() {
        return (
            <div>
                <Welcome name="Morty"/>
                <ColorBox color='lightgreen' width='150' height='150'/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    rootNode
);