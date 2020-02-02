import { action, observable } from "mobx";
import { observer } from 'mobx-react';
import React from 'react';

// на основе объекта
interface IProps {
    timerStore: typeof timerStore;
}

export let timerStore = observable({
    todo: [{text: 'learn react'}, {text: 'learn ts'}],
    timer: 10,
    get doubleTimer() {
        return this.timer * 2;
    },
    resetTimer() { this.timer = 0},
    increment() { this.timer++},
    decrement () {this.timer--},
    
}, {increment: action, decrement: action, resetTimer: action})


@observer
export default class Timer extends React.Component<IProps> {

    handleIncrement = () => this.props.timerStore.increment();
    handleDecrement = () => this.props.timerStore.decrement();
    handleRest = () => this.props.timerStore.resetTimer();

    render() {
        return (
            <div> 
                <p> {this.props.timerStore.timer} </p>
                <p> {this.props.timerStore.doubleTimer} </p>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>    
                <button onClick={this.handleRest}>reset</button>   
                <ul>
        {this.props.timerStore.todo.map(e => <li key={e.text}>{e.text}</li>)}    
                </ul>    
            </div>
        )
    }
}