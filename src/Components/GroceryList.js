import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Button } from 'reactstrap';




class GroceryList extends Component {

    render() {
        

            var groceries = this.props.data.map((grocery)=>{
               return (
                   <div id="Vegetables">
                    <Card id="veggies">
                    <CardImg src={require("../Components/Images/vegetablesXSmall.jpg")} alt="veggies" />
                    <CardBody>
                    <CardText>
                   {grocery.item}
                   {grocery.value}
                   </CardText>
                    </CardBody>
                   </Card>
               </div>
               )
            })
        
            return (

            <div>
             <h1>Vegetables</h1> 
                   {groceries}
                   </div>
                // </ul>

                
            )
}
}

export default GroceryList