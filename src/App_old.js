import React, { Component } from 'react';
import './App.css';

export default class App2 extends Component {
  state = {
    searchTerm: '',
    items: []
  };
  handleChange = (e) => {
    const { target: { value } } = e;
    this.setState({ searchTerm: value});
  }
  handleClick = async (e) => {
    const { searchTerm } = this.state;
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`)
    const { items } = await response.json();
    console.log(items)
    this.setState({ items: items });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <input type="text" name="search" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        <hr/>
        <ul>
            { items && items.map((item, index) => (
                <li>
                    <img className="img-fluid w-5" src={item.avatar_url} alt=""/>
                    <label htmlFor={item.id}>{item.login}</label>
                </li>
            )
            )}
        </ul>
      </div>
    );      
  }
}