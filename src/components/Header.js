import 'bootstrap/dist/css/bootstrap.min.css';//From node modules
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';//From node modules
import React, { Component } from 'react';
import GraphPolar from './../components/GraphPolar';
import Filtering from '../components/Filtering';
import './../styles/style.css';
import _ from 'lodash';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            timestamp: 0,
            tag: "",
            limit: 20,
            datares: {},
            totaltypes: []
        }
    }

    receivedQuery(querydata){
        this.setState(prevState => {
            prevState.timestamp = querydata.timestamp;
            prevState.tag = querydata.tag;
            prevState.limit = querydata.limit;
            prevState.datares = this.props.fillData

            if(!_.isEmpty(this.props.fillData)){
                prevState.totaltypes = _.groupBy(prevState.datares, 'type');
                // console.log(prevState.totaltypes);
            }

            return prevState;
         });

        //  console.log('this.state: ', this.state);

         //Pass to parent
         this.props.onFilterReceived(querydata);
    }

    generatePolarGraph(){
        return(
            <GraphPolar graphdata={this.state.totaltypes} />
        );
    }

    render() {
      return (
        <div>
            <header className="bg-gradient" id="home">
                <div className="container mt-5">
                    <h1>{this.props.title}</h1>
                    <p className="tagline">{this.props.tagline}</p>
                    
                    <Filtering receiveQueryDetails={(...args) => this.receivedQuery(...args)} />
                    {/* <p>{this.state.timestamp} and {this.state.tag} and {this.state.limit} and {console.log("romeo: ", this.state.datares)}</p> */}
                </div>

                {/* Pass data only when we have data */}
                {(!_.isEmpty(this.state.datares)) ? this.generatePolarGraph() : ''}
            </header>
        </div>
      );
    }
  }
  
  export default Header;