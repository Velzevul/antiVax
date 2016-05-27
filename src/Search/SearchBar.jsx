import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    this.super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    const {q} = this.props.location.query;
    
    return (
      <form onSubmit={this.submitForm}>
        <input type="text"/>
      </form>
    );
  }
}

export default SearchBar;
