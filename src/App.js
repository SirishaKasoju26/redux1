import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux1/Store';
import UserList from './Components/UserList';

import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux Fetch API</h1>
                <UserList />
            </div>
        </Provider>
    );
};

export default App;