import React, { Component } from 'react';
import './Dropdown.css';
import axios from 'axios'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    }
    searchBreed = (e) =>{
        e.preventDefault();
        const selectedElement = document.getElementById('inputGroupSelect04');
        const value = selectedElement.options[selectedElement.selectedIndex].value;
        axios.get(`https://dog.ceo/api/breed/${value}/images`)
        .then(result =>{
            console.log(result.data.message)
            const truncatedArray = result.data.message.splice(0, 10)
            this.setState({images: truncatedArray})
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render() {
        const name = this.props.resultSendToChild.map(name=>{
            return <option value={name} key={name}>{name}</option>
        })
        
        return (
            <>
            <div className="dropdown">
                <div className="input-group">
                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option defaultValue>Breed Name</option>
                        {name}
                    </select>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.searchBreed}>Submit</button>
                </div>
                {this.state.images.map((image, index) => (
                    <div className="row" key={index}>
                        <div className="col text-center">
                            <hr/>
                            <img src={image} alt="dog"/>
                        </div>
                    </div>
                ))}
            </div>
            </>
        )
    }
}
