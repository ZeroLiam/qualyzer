// import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navmenu from './../components/Navmenu';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Tumblrdata from '../components/Tumblrdata';
import './../styles/style.css';

class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      menulinks: [
        {
          link: "/",
          linkname: "home"
        }
      ]
    }
  }

  render() {

      return (
        <div>
          <Navmenu navlinks={this.state.menulinks} />
          <Header title="Qualyzer Landing Page" tagline="Qualitative Analyzer of social media trends and topics, made in React and using the free template MobApp from ColorLib. More to come once we connect to an API." />
          <Tumblrdata />
          <Footer />
        </div>
      );
    }
}

export default Main;