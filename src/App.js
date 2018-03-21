import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }  
  fetchFirst(url) {
    if (url) {
      fetch('http://localhost:3001/api/v1/' + url, {
        method: 'get',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response =>response.json()).then(response => {
        this.setState({categories:response})
      });
    }
  }  
  componentDidMount() {
    this.fetchFirst("categories");
  }
  // componentWillMount(){
  //   this.setState({
  //     categories:[
  //       {
  //         name: "Dine",
  //         id: 1
  
  //       },
  //       {
  //         name: "shine",
  //         id: 2
  //       }
  //     ]
  //   });
  // } 
  render() {
    if(!this.state.categories) return <p> Loading..... </p>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurants</h1>
        </header>
        <p className="App-intro">
        </p>
        <Categories categories={this.state.categories}/>
      </div>
    );
  }
}

export default App;