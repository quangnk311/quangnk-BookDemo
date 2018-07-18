import React, { Component } from 'react';

class New extends Component {

  constructor(props){
    super(props);
    this.state = {
      listBook : [],
    }
  }

  saveData = () => {
    //return ra app name tao moi
    this.props.saveData(this.refs.nameBook.value);
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" name="" className="form-control" ref="nameBook"/>
          <button type="button" className="btn  btn-success" onClick={this.saveData}>Thêm mới</button>
        </div>
      </div>
    );
  }
}

export default New;
