import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends Component {
    render(){
        return(
            <div>
                <h1> Contact me: </h1>
                <Form>
                    <Form.Group>
                        <Form.Label> Email Address</Form.Label>
                        <Form.Control type="email" placeholder="enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>  Name </Form.Label>
                        <Form.Control type="Name" placeholder="enter name"/>     
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label> What's your favorite vine?</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Contact;