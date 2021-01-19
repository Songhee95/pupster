import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: ""
        }
    }
    componentDidMount(){
        this.pageChange()
    }
    pageChange = ()=>{
        this.setState({page: this.props.sendPageToNav })
    }
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Pupster</a>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className={this.state.page=== "/" ? "nav-link active" : "nav-link"} id="/" aria-current="page" href="/" onClick={this.pageChange}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className={this.state.page==='/Discover' ? "nav-link active" : "nav-link"} id="/Discover" href="/Discover" onClick={this.pageChange}>Discover</a>
                    </li>
                    <li className="nav-item">
                    <a className={this.state.page=== '/Search' ? "nav-link active" : "nav-link"} id="/Search" href="/Search" onClick={this.pageChange}>Search</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        )
    }
}

