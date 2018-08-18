import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
import GraphPolar from './../components/GraphPolar';
import Filtering from '../components/Filtering';
import './../styles/style.css'

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            timestamp: 0,
            tag: "",
            limit: 20
        }
    }

    receivedQuery(querydata){
        this.setState(prevState => {
            prevState.timestamp = querydata.timestamp;
            prevState.tag = querydata.tag;
            prevState.limit = querydata.limit;

            return prevState;
         });
    }

    render() {
      return (
        <div>
            <header className="bg-gradient" id="home">
                <div className="container mt-5">
                    <h1>{this.props.title}</h1>
                    <p className="tagline">{this.props.tagline}</p>
                    
                    <Filtering receiveQueryDetails={(...args) => this.receivedQuery(...args)} />
                    <p>{this.state.timestamp} and {this.state.tag} and {this.state.limit} </p>
                </div>

                <GraphPolar />
            </header>
        </div>
      );
    }
  }
  
  export default Header;