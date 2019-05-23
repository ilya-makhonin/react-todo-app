import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import TodoContainer from 'containers/TodoContainer';
import { Provider } from 'react-redux';
import store from 'store';


class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="app">
                    <TodoContainer />
                </div>
            </Provider>
        );
    }
}


export default hot(App);
