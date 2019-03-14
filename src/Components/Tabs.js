import React, { Component } from 'react';




class Tabs extends Component{
    render(){
    return (

<div >
         <center>  <div id = "banner">🛒</div></center> 
<div className="topnav" id="myTopnav">

      
  <a href="#news">Login</a>
  <a href="#contact">Grocery History</a>
  <a href="#about">New List</a>
  <a href="javascript:void(0);" className ="icon" >
    <i className="fa fa-bars"></i>
  </a> 


</div>
   

    </div>



 );
}
}

export default Tabs;