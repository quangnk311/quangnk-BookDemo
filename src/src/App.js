import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import axios from 'axios';
import New from './New';

const API = 'http://52.37.92.74/api/books.json';
// const DEFAULT_QUERY = 'redux';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      listBook : [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(result => {
          this.setState({
            listBook : result.data.books
          });
        }
      )
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  saveData = (data) => {

    console.log(data);
    var {listBook} = this.state;

    var item = {
        id : this.genderId(),
        title : data
    }

    listBook.push(item);
    this.setState({
      listBook : listBook
    });


  }

  onDelete = (id) => {
    var index = this.findIndex(id);
    var {listBook} =  this.state;

    listBook.splice(index,1);

    this.setState({
      listBook : listBook
    });
  }

  findIndex(id){
    var {listBook} =  this.state;
    var indexReturn = -1;
    listBook.forEach((item,index) => {
      if(item.id === id){
          indexReturn = index;
      }
    });
    return indexReturn;
  }



  genderId(){
    return Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100); 
  }


  render() {
    return (
      <div className="App">
        <New saveData={this.saveData}/>
        <List listBook={this.state.listBook} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;
