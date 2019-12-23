import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { combinedReducers } from './redux/CombinedReducer';
import searchStringReducer from './redux/SearchStringReducer';
import processDataReducer from './redux/ProcessDataReducer';



const store = createStore(processDataReducer)


// const store = createStore(data);
// // функция редюсес, передается при создании глобально стора
// function data(store = [], action) {
//     console.log(action);
//     return store;
// }
// // диспетчер отправляет событие, которое будет отрабатывать в редюсере
// store.dispatch({type: 'MY_EVENT', payload: 'add somthing'});
// // можно подписаться на изменение состояния стора 
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

ReactDOM.render(<Provider store={store}>
    {/* <FilteringTable /> */}
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
