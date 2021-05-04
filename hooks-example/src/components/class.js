import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  }
  modify = n => {
    this.setState({
        count:n
      });
    };
  render() {
    const { count } = this.state;
    return (
      <> 
        <div> 
          { count } 
        </div>
        <button onClick={() => this.modify(count + 1)}>
          increment
        </button>
      </>
    );
  }
}

export default App;
