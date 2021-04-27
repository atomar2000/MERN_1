import App from './App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
const react = require('react');
const ReactDOM = require('react-dom')


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root'));
