import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
  }

  
  render() {
    var elemlistBook = this.props.listBook.map((item,index) => {
      return  <Item key={item.id} item={item} index={index} onDelete={this.props.onDelete}/>
    })
    return (
      <div className="App">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {elemlistBook}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
