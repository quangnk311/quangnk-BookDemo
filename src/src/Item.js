import React, { Component } from 'react';


class Item extends Component {

  constructor(props){
    super(props);
  }

  onDelete = () => {
    // alert(this.props.item.id);
    this.props.onDelete(this.props.item.id);
  }

  
  render() {
    return (
      <tr key={this.props.item.id}>
              <td>{this.props.index + 1}</td>
              <td>{this.props.item.title}</td>
              <td width="200px">
                <button type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
              </td>
            </tr> 
    );
  }
}

export default Item;
