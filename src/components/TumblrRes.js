import React, { Component } from 'react';
import _ from 'lodash';
//Purify the strings you want to get from the response
//because you don't want a random injection to whatever
//you're pulling from the Tumblr dot com lol
import createDOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import tumblrclient from './../lib/tumblrclient';
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

class TumblrRes extends Component{
    constructor(props){
        super(props);
        this.state = {
            datares: {}
        }
    }
    
    componentDidMount(){
        var promiseObj = new Promise((resolve, reject)=>{
            tumblrclient.userInfo((err, data)=>{
                    var k = {};
                    k = data;

                    resolve(k);
                    reject(err);
            });
        });

        promiseObj.then((successMsg)=>{
            this.setState({datares: successMsg});
            console.log(this.state.datares);
        }).catch((reason) => {
                console.log('Handle rejected promise ('+reason+') here.');
                
            });
    }

    render() {
        return (
            <div className="tumblrres">
            </div>
        );
    }
}
  export default TumblrRes;