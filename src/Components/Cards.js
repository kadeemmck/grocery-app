import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Button } from 'reactstrap';






class Cards extends Component{
    render(){
    return (
<div>

    <div id="Vegetables">


      <Card id="veggies">
        <CardImg src={require("../Components/Images/vegetablesXSmall.jpg")} alt="veggies" />
        <CardBody>
     <h1>Vegetables</h1> 
          
          <CardText> Plant life or plant product, namely “vegetable matter”; 
            in common, narrow usage, the term vegetable usually refers to the 
            fresh edible portions of certain herbaceous plants—roots, 
            stems, leaves, flowers, fruit, or seeds. 
            These plant parts are either eaten fresh or prepared in a number of ways, 
            usually as a savory, rather than sweet, dish.
            </CardText>
         <center> <Button id="button">Button</Button></center>


        </CardBody>
      </Card>


      
   
     </div>


{/* ********************************** */}
    <div id="rock">



      <Card  id ="Dairy">
        <CardImg id='milk'  src={require("../Components/Images/dairy.jpeg")} alt="dairy" />

        <CardBody>
        <h1>Dairy</h1>

         <CardText >
              Got milk? If you're from the Americas, Australia, 
              or any country in Europe, the answer is probably yes. 
              Milk has long been a staple in those parts of the world
              and the variety continues to expand,
              as does our love for all things rich and creamy made from it 
               </CardText> 
                         
             <center> <Button id="button">Button</Button></center> 
        </CardBody>
      </Card>


    </div>

 

      

{/* ********************************** */}

    <div id="bottom">



<Card  id ="Meat">
  <CardImg id='Meats'  src={require("../Components/Images/Meat.jpg")} alt="meat" />

  <CardBody>
  <h1>Meats</h1>

        <CardText>
        100% pure USDA inspected beef; no fillers, no extenders.
        ground meat, often pork, beef, or veal, along with salt, 
        spices and other flavourings, and breadcrumbs. Tender beef 
        cut Lean yet succulent and elegant, 
        Melt-in-your-mouth texture, subtle flavor and compact shape.
         </CardText> 
                   
       <center> <Button id="button">Button</Button></center> 
  </CardBody>
</Card>


</div>


{/* ********************************** */}


<div id="call">



<Card  id ="Misc">
  <CardImg id='dope'  src={require("../Components/Images/misc.jpeg")} alt="meat" />

  <CardBody>
  <h1>Miscellaneous</h1>

        <CardText >
        The “toiletry” category is huge, so here are a few other things
        toothpaste, deodorant, shampoos, and more. Dish soap toilet bowl cleaner 
        Dishwasher tabs Laundry detergent Toilet paper Paper towels, 
        Whipped Magnesium Lotion Detox Mask with Charcoal and Clay
        Hand Sanitizer Lip Balm Tinted Moisturizer 
         </CardText> 
                   
       <center> <Button id="button">Button</Button></center> 
  </CardBody>
</Card>


</div>



















   </div>
    )}
  }








 


export default Cards;