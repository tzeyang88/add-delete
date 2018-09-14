import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count";
import {compose, withHandlers, withProps, withStateHandlers} from "recompose";

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
  handleAdd = (selected) => {
    const arrCounts = this.state.arrCounts;
    let index;
    arrCounts.find((arrCount, i) => {
      const found =  arrCount.id === selected;
      if(found) index = i;
      return found;
    });
    arrCounts[index].value += 1
    console.log(arrCounts, index, [...arrCounts, { name:"john"}]);
    this.setState({
      arrCounts: arrCounts
    })
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    this.props.handlerCreater("something")
    return (
   <div className="container">
      <nav className="navbar">add and delete</nav>
      <div className="button-container">       
        {this.props.arrCounts.map(arrCount =>
          <Count key={arrCount.id }
        id={arrCount.id}
        value={arrCount.value}
        onDelete={this.props.handleDelete}
        onAdd={this.handleAdd}/>)
        }
      </div>
    </div>
    );
  }
}

const count = compose(
  withProps({
    test: "test"
  }),
  withProps((props) => {
    return {
      test: props.test + "1"
    }
  }),
  withStateHandlers(
    //with props
    () => {
      return {
        arrCounts:  [
          {id: 1, value: 0, name: "tzeyang"},
          {id: 2, value: 0, },
          {id: 3, value: 0}
        ]
      }
    }
    ,
    //withHandlers
    {
      setArrCounts: props =>(arrCount) => {
        return {
          arrCount
        }
      }
    }
  ),
  withHandlers({
    handleDelete: ({ arrCounts, setArrCounts }) => (selected) => {
      arrCounts = arrCounts.filter(arrCount => arrCount.id !== selected )
      console.log(selected, arrCounts);
      setArrCounts({arrCounts})
      console.log("click")
    },
    handlerCreater: props =>(arg1,arg2) => {
      console.log(props.test, arg1)
    }
  })
)
export default count(App);
