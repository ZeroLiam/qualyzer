import React, { Component } from 'react';
import _ from 'lodash';
//Purify the strings you want to get from the response
//because you don't want a random injection to whatever
//you're pulling from the Tumblr dot com lol
import createDOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import tumblrclient from './../lib/tumblrclient';
import PostBody from './postresponse/PostBody';
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

class Tumblrdata extends Component{
    constructor(props){
        super(props);
        this.state = {
            datares: {}
        }
    }
    
    componentDidMount(){

        // Show user's blog names /*TEST*/
        // var promiseObj = new Promise((resolve, reject)=>{
        //     tumblrclient.userInfo((err, data)=>{
        //             var k = [];
        //             data.user.blogs.forEach((blog)=>{
        //                 k.push(blog.name);
        //             });
        //             resolve(k);
        //             reject(err);
        //     });
        // });

        // promiseObj.then((successMsg)=>{
        //     this.setState({blogs: successMsg});
        //     this.getPostBody();
        // }).catch((reason) => {
        //         console.log('Handle rejected promise ('+reason+') here.');
        //         this.setState({blogserr: reason.toString()});
        //     });
    }

    render() {
        return (
            <div className="tumblrres">
                <h3>Posts found:</h3>
                <div className="postresponse">
                    
                </div>
            </div>
        );
    }
}
  export default Tumblrdata;