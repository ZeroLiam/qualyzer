import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './../styles/style.css'

class Navmenu extends Component {

    render() {
      return (
        <div className="nav-menu fixed-top">  
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-dark navbar-expand-lg">
                            {/* Logo */}
                            <Link to="/" className="navbar-brand">
                                <span><b>QUAL</b>YZER</span>
                            </Link>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Menu */}
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                {this.props.navlinks != null ? _.map(this.props.navlinks, (link, id) => <li className="nav-item" key={id}><Link className="nav-link" to={link}>{link.linkname}</Link></li>) : ''}
                                </ul>
                            </div>
                        
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        
      );
    }
  }
  
  export default Navmenu;