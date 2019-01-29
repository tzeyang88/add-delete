import React, { Component } from 'react';
import './App.css';
import Count from "./components/count";

class App extends Component {
  state = {
    arrCounts: [
      {id: 1, value: 0, name: "tzeyang"},
      {id: 2, value: 0, },
      {id: 3, value: 0}
    ]
  };

  handleDelete = (selected) => {
    const arrCounts = this.state.arrCounts.filter(arrCount => arrCount.id !== selected )
    this.setState({arrCounts})
  }

  handleAdd = (selected) => {
    const arrCounts = this.state.arrCounts;
    let index;
    arrCounts.find((arrCount, i) => {
      const found =  arrCount.id === selected;
      if(found) index = i;
      return found;
    });
    arrCounts[index].value += 1
    this.setState({
      arrCounts: arrCounts
    })
  }

  render() {
    return (
   <div className="container">
      <nav className="navbar">add and delete</nav>
      <div className="button-container">       
        {this.state.arrCounts.map(arrCount =>
          <Count key={arrCount.id }
        id={arrCount.id}
        value={arrCount.value}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}/>)
        }
      </div>
    </div>
    );
  }
}

export default App;
