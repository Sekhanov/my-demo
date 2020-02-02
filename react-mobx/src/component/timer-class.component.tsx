import { action, observable, computed, decorate } from "mobx";
import { observer } from 'mobx-react';
import React, { ChangeEvent } from 'react';

// на основе класса и декораторов
interface IProps {
    timerStore: ClassTimerStore;
}

export class ClassTimerStore {
    @observable
    name = '234234';
    @observable
    todo = [{text: 'learn react'}, {text: 'learn ts'}];
    @observable
    timer =  10;
    @computed
    get doubleTimer() {return this.timer * 2;}
    @action
    resetTimer() { this.timer = 0};
    @action
    increment() { this.timer++};
    @action
    decrement() {this.timer--};
    @action
    updateName(name: string) {this.name = name}
    
}
// можно все декораторы задать через функцию
// decorate(ClassTimerStore, {
//     todo: observable,
//     timer: observable,
//     doubleTimer: computed,
//     resetTimer: action,
//     increment: action,
//     decrement: action
// })


@observer
export default class TimerClass extends React.Component<IProps> {

    handleIncrement = () => this.props.timerStore.increment();
    handleDecrement = () => this.props.timerStore.decrement();
    handleRest = () => this.props.timerStore.resetTimer();
    handleName = (e: ChangeEvent<HTMLInputElement>) => this.props.timerStore.updateName(e.target.value);

    render() {
        return (
            <div> 
    <p>{this.props.timerStore.name}</p>
                <p> {this.props.timerStore.timer} </p>
                <p> {this.props.timerStore.doubleTimer} </p>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>    
                <button onClick={this.handleRest}>reset</button>  
                <input type="text" onChange={this.handleName}></input>
                <ul>
        {this.props.timerStore.todo.map(e => <li key={e.text}>{e.text}</li>)}    
                </ul>    
            </div>
        )
    }
}