import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProfileList from './components/ProfileList';

// COMPONENT CONTAINER
export default class App extends Component {
  state = {
    searchTerm: '',
    items: []
  }

  handleOnChange = (e) => {
    const { target: { value } } = e;
    this.setState({ searchTerm: value });
  }

  handleClick = async (e) => {
    const { searchTerm } = this.state;
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
    const { items } = await response.json();
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <SearchBar
          handleOnChange={this.handleOnChange}
          handleClick={this.handleClick}
        />
        <hr/>
        <ul>
          { items && items.map((item, index) => <ProfileList key={index} data={item} /> )}
        </ul>
      </div>
    )
  }
}