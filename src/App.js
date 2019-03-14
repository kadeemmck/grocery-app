import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Tabs from './Components/Tabs';
import $ from 'jquery';
import GroceryList from './Components/GroceryList';
import AddGrocery from './Components/AddGrocery';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      groceryList: []
    };
  }

  getGroceryList(){
    $.ajax({
      url:' https://backend-grocery-list.herokuapp.com/groceries',
      dataType:'json',
      cache: false,
      
      success: function(data){
        this.setState({groceryList: data});
        console.log(data)
      }.bind(this),
      error: function (xhr, status, err){
        console.log(err);
        console.log(xhr)
        console.log(status)
        alert(err);
      }
    });
  }

componentDidMount(){
  this.getGroceryList()

}
  render() {
    return (
     <div> 
          <Tabs/> 
       <AddGrocery/>
       <GroceryList data={this.state.groceryList}/>
         
       {/* <Cards/> */}
      
     </div>
      
      

    
    );
  }

}

export default App;





