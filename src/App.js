import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className='container text-center'>
      <Clock/>
    </div>
  )
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();
    // this.time 
    this.state = {
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}:${this.now.getMilliseconds()}`
    }
    this.refresh = this.refresh.bind(this);
  }
  refresh(){
    this.now = new Date();
    this.setState((state) => ({
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}:${this.now.getMilliseconds()}`
    }));
  }
  render(){
    
    return <p onClick={this.refresh}>{this.state.time}</p>
  }
}
export default App;
