import 'bootstrap/dist/css/bootstrap.min.css';//From node modulesper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
import './../styles/style.css'

class Footer extends Component {

    render() {
      return (
        <div>
            <footer className="my-5 text-center">
            <p className="mb-2">
                <small>
                    COPYRIGHT &copy; 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">COLORLIB</a>
                </small>
            </p>

            </footer>
        </div>
      );
    }
  }
  
  export default Footer;