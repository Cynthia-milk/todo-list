import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './TodoList'

const App = (
    <Provider store={store} >
        <TodoList />
    </Provider >
)

ReactDOM.render(App, document.getElementById('root'));

