import React from 'react';
import ReactDOM from 'react-dom';
import { promiseMiddleware } from './middleware';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore (
    reducer,
    applyMiddleware(promiseMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
