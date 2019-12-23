import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <div> {this.props.searchString} </div> */}
    <div>{this.props.data.persons[0].name}</div>
      </div>

    )
  }
}

export default connect(
  state => (
    {
      // searchString: state.searchString,
      data: state.data
    }
  )
)(App)

