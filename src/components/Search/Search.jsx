import axios from 'axios'
import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';
import Dropdown from '../Dropdown/Dropdown'

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            url: "https://dog.ceo/api/breeds/list",
            results: []
        }
    }
    componentDidMount(){
        this.searchDog(this.state.url);
    }
    searchDog = (url) =>{
        axios.get(url)
        .then(response =>{
            console.log(response);
            this.setState({results : response.data.message});
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render() {
        return (
            <>
                <Navbar sendPageToNav="/Search"/>
                {this.state.results && <Dropdown resultSendToChild ={this.state.results}/>}
            </>
        )
    }
}
