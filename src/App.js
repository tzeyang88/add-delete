import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"

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
    console.log(selected, arrCounts);
    this.setState({arrCounts})
    console.log("click")
  }
  render() {
    return (<div>
      {this.state.arrCounts.map(arrCount =>
      <Count key={arrCount.id } id={arrCount.id} value={arrCount.value} onDelete={this.handleDelete}/>)}</div>
    );
  }
}

export default App;
