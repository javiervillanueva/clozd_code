import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

let userData = [];

class App extends Component {

  componentDidMount () {
    axios.get('http://localhost:5000/results')
    .then((res) => {
      console.log(res);
      const users = res.data;
      userData = users;
      this.forceUpdate();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  

  render () {

    const listItems = userData.map((d) => <p key={d.name?.first}> <span><p> FIRST </p> {d.name?.first} <p> LAST </p> {d.name?.last} <p> EMAIL </p> {d.email} <p> LOCATION </p> {d.location.city},{d.location.country}</span></p>);
    return (
      <div className="App">
      {listItems}
      
      </div>
    )
  }
  
}

export default App;
