import React from 'react';
import logo from './logo.svg';
import './App.css';

const myarr =  [
  {
    name: 'sergey',
    surname: 'khanov'
  },
  {
    name: 'ivan',
    surname: 'petrov'
  },
  {
    name: 'diva',
    surname: 'ivanna'
  }
]

function App() {
  return (
    <div className="App">
      <Content names={myarr}></Content>
    </div>
  );
}

export default App;

class Content extends React.Component {


  render() {
    let lis = this.props.names.map((name, index) => {
      return <li key={index}> {name.name} - {name.surname} </li>
    })
    return (
      <div>
        {lis}
      </div>
    )
  }
}
