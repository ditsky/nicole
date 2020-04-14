import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Doggo extends Component {

    constructor(props) {
        super(props)
        this.state= {
            doggoUrl: "",
            catUrl: ""
        }
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(doggo => this.setState({ doggoUrl: doggo.message }))

        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(cat => this.setState({ catUrl: cat[0].url}))
    }
    
    render(){
        return(
            <div>
                <h1> WHAT A GOOD BOI!!!!! </h1>
                <Image src={this.state.doggoUrl} roundedCircle />
                <h1> Ollie Baby?! Mr. Baby?! BABY!!!!</h1>
                <Image src={this.state.catUrl} roundedCircle />
            </div>
        );
    }
}

export default Doggo;