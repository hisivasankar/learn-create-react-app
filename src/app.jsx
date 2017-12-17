import React from 'react';
import ReactDOM from 'react-dom';

import {Welcome} from './components/Welcome';

var rootNode = document.getElementById('app');

ReactDOM.render(
    <Welcome name="Morty"/>,
    rootNode
);