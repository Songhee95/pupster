import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Discover.css";
import axios from 'axios'

export default class Discover extends Component {
    state = {
        imageUrl : "https://dog.ceo/api/breeds/image/random",
        image: "",
        number: 0
    }
    componentDidMount(){
        this.randomDog(this.state.imageUrl)
    }
    randomDog = (url) =>{
        axios.get(url)
        .then(response =>{
            console.log(response);
            this.setState({image: response.data.message})
        })
    }
    changeImage = (e) =>{
        e.preventDefault();
        this.randomDog(this.state.imageUrl);
        const ranNum = Math.floor(Math.random() * 5);
        console.log(e.target.className)
        if(e.target.className==="button1" && ranNum===3){
            alert("you got a match!!");
            this.setState({number: this.state.number+1})
        }
    }
    render() {
        return (
            <>
                <Navbar sendPageToNav="/Discover"/>
                <div className='dog-container'>
                    <h1>Make New Friends</h1>
                    <p>Thumbs up on any pups you'd like to meet!</p>
                    <img src={this.state.image} alt="dog" className='dogImage' />
                </div>
                <div className='button-container'>
                    <button className='button1' onClick={this.changeImage}>😍</button>
                    <button className='button2' onClick={this.changeImage}>🤢</button>
                    <h1>
                        Made friends with {this.state.number} pups so far!
                    </h1>
                </div>
            </>
        )
    }
}
