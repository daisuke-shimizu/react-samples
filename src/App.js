import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let items = [
    {'name': 'berry','price': '100'},
    {'name': 'apple','price': '150'},
    {'name': 'banana','price': '230'}
  ]

  return(
    <div className='App'>
      <table className='table table-striped'>
        <tbody>
          {items.map((value) => (
              <tr> 
              <th scope='row'>{value.name}</th>
              <td>￥{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
