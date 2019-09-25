import React, { Component } from 'react';
import Searchbar from "./components/searchbar/searchbar.js"
import Card from './components/cards/cards.js';

import './App.css';


class App extends Component {



  state = {
    items: []
  };


  componentDidMount() {
    fetch('https://api.github.com/search/users?q=type:users+location:lagos+language:react', {method: 'GET'})
      .then(response => response.json())
      .then((data) => {
        console.log(data.items)
        this.setState({ items: data.items })
      })
      .catch(console.log)
  }

  handleFiltering = (inputValue) => {
    console.log(inputValue)
    // this.setState({
    //   items: this.state.items.filter(item => item.login.includes(inputValue))
    // })
    
    fetch(`https://api.github.com/search/users?q=type:users+location:lagos+language:react+user:${inputValue}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                if (data.total_count === 0 ) {
                  console.log(data.message, 'error')
              }
              else {
                console.log(data.items);
                this.setState({items: data.items })
              }
            })
            .catch(console.log)
  }

  handleReset = () => {
    fetch('https://api.github.com/search/users?q=type:users+location:lagos+language:react', {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        this.setState({items: data.items})
      })
  }


  render() {
    return (
      <div className="App">
      <Searchbar 
        handleFilter={this.handleFiltering}
        handleReset={this.handleReset}/>
      <Card items={this.state.items} />
      </div>
    );
  };
}
export default App;
