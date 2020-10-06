import React, { useEffect, useState } from 'react';
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

      <Counter></Counter>
      <Users></Users>
      
      {
        //fruits.map(fru => <Fruits>{fru}</Fruits>)
        fruits.map(fru => <Fruits fruits={fru}></Fruits>)

      }
        

        


      </header>
    </div>
  );
}

function Users(){

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>Dinamic Users: {users.length}</h2>
      {
        users.map(users => <li>{users.name}</li>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
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
