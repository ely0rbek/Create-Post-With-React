import React, { Component } from "react";

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }
  increment(){
    this.setState({count: this.state.count+1})
  }
  decrement(){
    this.setState({count: this.state.count-1})
  }
  render(){
    return(
      <>
      <p>Count: {this.state.count}</p>
      <button className="btn btn-dark" onClick={this.increment}>Incr</button>
      <button className="btn btn-success" onClick={this.decrement}>Decr</button>
      </>
    )
  }
}
export default Counter;