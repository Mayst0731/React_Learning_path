import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //  create a constructor function first, constructor should be lowercase
  constructor(){
    super();

    this.state = {
      monsters : []
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
  }

  render(){
    return (
      // className can avoid repeatition because class can also be used in js class
      <div className="App">
        {
          this.state.monsters.map(monster => (
          <h1 key = {monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
