import React, { Component } from 'react'

class Count extends Component {
    state = {
            count: 0
        };
      handleClick = () => { 
           this.setState({count: this.state.count + 1})
      }
   
    render() {
        //const { onDelete } = this.props;
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "danger" : "warning";
        return (
            <div>
                <span className={classes}>{this.state.count}</span>
                <button onClick={this.handleClick} className="btn btn-danger btn-sm m-2">add</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn-sm btn btn-danger'>delete</button>
            </div>
        );
    }
}
export default Count;


