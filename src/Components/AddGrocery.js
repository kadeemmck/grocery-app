import React, { Component } from 'react';

class AddGrocery extends Component {
    render() {
        return (
            <form action="https://backend-grocery-list.herokuapp.com/groceries" method="post">

            <input name ="item"  type="text" placeholder="Item"/>
            <input name ="value" type="text" placeholder="Value"/>
            
            <input name ="submit" type="submit" placeholder="Submit"/>
            </form>
        )}
}

export default AddGrocery