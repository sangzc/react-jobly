import React, { Component } from 'react';

export default class Search extends Component {
  constructor(){
    super()
    this.state={
      search:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.triggerSearch(this.state);
    this.setState({search:''});
  }

  handleChange(evt){
    this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    return (
      <div> 
      <form onSubmit={this.handleSubmit}>
        <input  id='search' 
                name='search' 
                value={this.state.search}
                onChange={this.handleChange}/>
        <button > Submit </button>
      </form>
      </div>
    );
  }
}
