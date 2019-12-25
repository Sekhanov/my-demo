import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfPersons from './component/ListOfPersons';

const App: React.FC = () => {
  return (
    <div className="App">
      hello!
      <ListOfPersons someString={'some string form react props'}></ListOfPersons>
    </div>
  );
}

export default App;
