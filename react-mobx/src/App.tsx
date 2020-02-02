import React from 'react';
import './App.css';

import TimerClass, { ClassTimerStore } from './component/timer-class.component';
import Timer, { timerStore } from './component/timer.component';



function App() {
  return (
    <div className="App">        
        <TimerClass timerStore={ new ClassTimerStore() }></TimerClass>
        {/* <Timer timerStore={ timerStore }></Timer> */}
    </div>
  );
}

export default App;
