import React, { Component } from 'react'

class Count extends Component {
    state = {
            count: 0
        };
    render() {
        return (
            <div className="group">
              <a className="value">{this.props.value}</a>
              <a className="btn btn__add" onClick={() => this.props.onAdd(this.props.id)}>add</a>
              <a className="btn btn__delete" onClick={() => this.props.onDelete(this.props.id)}>delete</a>
            </div>
        );
    }
}

export default Count;


