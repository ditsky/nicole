import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class About extends Component {
    render() {
        return (
            <div className = 'about'>
                <Row className="justify-content-md-center">
                    <Col className='div-image' md='auto' lg="2">
                        <Image src='Nicole.png' roundedCircle />
                    </Col>
                    <Col lg="2">
                        <p> My name is Nicole, and I'm pretty cool. </p>
                        
                        <p> I wear my Jacket when I go to school. </p>
                        
                        <p> All the other kids are like hey who's that?. </p>
                        
                        <p> I say my name is Nini and I think the earth is flat. </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;
