import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navmenu from './../components/Navmenu';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Tumblrdata from '../components/Tumblrdata';
import tumblrclient from './../lib/tumblrclient';
import {get} from './../lib/ajaxconfig';
import apikey from './../lib/apikey';
import './../styles/style.css';

class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      timestamp: 0,
      tag: "",
      limit: 20,
      datares: {}
    }
  }
    
  requestDataFromTumblr(querydata){

    get('/tagged?tag=' + querydata.tag + '&before=' + querydata.timestamp + '&limit='+querydata.limit + apikey.key).then((data) => {
      console.log("data received: ", data);
    }).catch((xhr, status, data) => {
      console.log(xhr, status, data);
    });
  }

  receivedFilter(querydata){
    
      this.setState(prevState => {
          prevState.timestamp = querydata.timestamp;
          prevState.tag = querydata.tag;
          prevState.limit = querydata.limit;

          return prevState;
       });

    this.requestDataFromTumblr(querydata);
  }

  render() {

      return (
        <div>
          <Navmenu />
          <Header title="Qualyzer Landing Page" tagline="Qualitative Analyzer of social media trends and topics, made in React and using the free template MobApp from ColorLib. More to come once we connect to an API." onFilterReceived={this.receivedFilter.bind(this)} fillData={this.state.datares} />
          <Tumblrdata fillData={this.state.datares} />
          <Footer />
        </div>
      );
    }
}

export default Main;