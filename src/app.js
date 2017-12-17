import ReactDOM from 'react-dom'
import Welcome from './components/Welcome';

console.log('Creating an app!');
var rootNode = document.getElementById('app');

ReactDOM.render(<Welcome name='Morty'/>, rootNode);