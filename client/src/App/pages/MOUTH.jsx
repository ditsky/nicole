import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class List extends Component {

  render() {

    return (
      <div className="App">
        <h1> MOUTH </h1>
        <Image src='/MOUTH.JPG' roundedCircle />
      </div>
    );
  }
}

export default List;