import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import _ from 'lodash';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navmenu from './../components/Navmenu';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Tumblrdata from '../components/Tumblrdata';
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

    var promiseObj = new Promise((resolve, reject)=>{
      get('/tagged?tag=' + querydata.tag + '&before=' + querydata.timestamp + '&offset='+querydata.limit + apikey.key).then((data) => {
          var k = {};
          k = data.response;

          resolve(k);
          
        });
    });

    promiseObj.then((successMsg)=>{
        this.setState({datares: successMsg});
        // console.log("datares: ", this.state.datares);
        
    }).catch((reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
            
        });

    // console.log("this.state.datares: ", this.state.datares);
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
          <Header title="Qualyzer Landing Page" tagline="Qualitative Analyzer of social media trends and topics, made in React and using the free template MobApp from ColorLib. Current version only handles Tumblr's API." onFilterReceived={this.receivedFilter.bind(this)} fillData={this.state.datares} />
          <Tumblrdata fillData={this.state.datares} />
          <Footer />
        </div>
      );
    }
}

export default Main;