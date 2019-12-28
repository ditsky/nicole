import React, { Component } from 'react';
import About from './About';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <div className="div-image-wide"> 
        <h1 > Keep Moving Forward </h1>
        <Link to={'./about'}>
          <button className="Button">
              Learn More
          </button>
        </Link>
      </div>
      <About> </About>
      
    </div>
    );
  }
}
export default Home;