import React, { useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Form from './Form';

// const initialFormValues ={
//   name:'',
//   size:'',
//   specialInstructions:'',
//   cheese: false,
//   pepperoni: false,
//   sausage: false,
//   bacon: false,

// }
// const initialFormErrors ={
//   name:'',
//   size:'',
//   specialInstructions:'',
// }


// const initialDisabled =true

function Home(props) {
  return <h1>Home</h1>
}

function Order() {
  return <Form/>
  }


const App = () => {
//   const [formValues, setFormValues] = useState(initialFormValues)
//   const [formErrors, setFormErrors] = useState(initialFormErrors)
//   const [disabled, setDisabled] = useState(initialDisabled)
//   setFormValues(initialFormValues);

//   const inputChange = (name, value) => {
//   setFormValues({
//     ...formValues,
//     [name]: value
//   })
// }

// const formSubmit = () => {
// const newOrder = {
//   name: formValues.name.trim(),
//   size: formValues.size.trim(),
//   specialInstructions: formValues.specialInstructions.trim(),
//   toppings: ['cheese', 'pepperoni', 'sausage', 'bacont'].filter(topping => !!formValues[topping])
// }




  return (
    
    <div className="App">
      <h3>Lambda Eats </h3>
      <nav id="order-pizza">
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>
        <Route exact path='/' component={Home}/>
        <Route path='/pizza' component={Order}/>

        <div className="header-image">
          <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
          <h1>We Deliver To You So You Don't Have To Stop Coding</h1>
          <button>Pizza?</button>
        </div>
    </div>
      
  );
  }
export default App;
