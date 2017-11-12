import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <input 
        value = {this.state.term}      
        onChange = {this.onInputChange} 
      />
    );
  }

  onInputChange = (event) => {
    const term = event.target.value;
    console.log(term);
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;