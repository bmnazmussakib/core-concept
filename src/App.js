import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const fruits = [{name: 'Banana', price: '$20.75'},
                  {name: 'Apple', price: '$10.75'},
                  {name: 'Mango', price: '$10.75'},
                  {name: 'Strawberry', price: '$10.75'}, ]

             

  

  return (
    <div className="App">
      <header className="App-header">

      
      {
        fruits.map(fru => <Fruits>{fru}</Fruits>)
      }
        

        


      </header>
    </div>
  );
}

function Fruits(props){

  const fruitsStyle = {
    color: 'Black',
    width: '200px',
    height: 'auto',
    backgroundColor: 'darkgray',
    border: '1px solid gray',
    borderRadius: '10px',
    float: 'left',
    margin: '20px',
    padding: '20px'
  }

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  }

  const {name, price} = props.fruits;
  return (
    <div style = {fruitsStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p style = {{fontSize: '14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem!</p>
      <button style = {buttonStyle}>Buy Now</button>
      

    </div>
  )
}

export default App;
