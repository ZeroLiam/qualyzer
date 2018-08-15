import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import './../styles/style.css'

class Header extends Component {

    render() {
      return (
        <div>
            <header className="bg-gradient" id="home">
                <div className="container mt-5">
                    <h1>{this.props.title}</h1>
                    <p className="tagline">{this.props.tagline}</p>
                </div>
            </header>
        </div>
      );
    }
  }
  
  export default Header;