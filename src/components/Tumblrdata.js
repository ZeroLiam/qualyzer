import React, { Component } from 'react';
import _ from 'lodash';
//Purify the strings you want to get from the response
//because you don't want a random injection to whatever
//you're pulling from the Tumblr dot com lol
import createDOMPurify from "dompurify";
// import { JSDOM } from 'jsdom';
import tumblrclient from './../lib/tumblrclient';
import PostBody from './postresponse/PostBody';
// const window = (new JSDOM('')).window;
// const DOMPurify = createDOMPurify(window);

class Tumblrdata extends Component{
    constructor(props){
        super(props);
        this.state = {
            datares: {}
        }
    }
    
    componentDidMount(){
        this.setState({datares: this.props.fillData})
    }

    // getPosts(){
        
    //     return _.map(this.state.blogs, (val, i) => {
    //           return (
    //               <PostBody key={i} clean={this.state.bodytest} tags={this.state.blogs} blogtitle={val} />
    //           )
    //     });
    // }

    render() {
        return (
            <div className="tumblrdata">
                <h3>Posts found:</h3>
                <div className="postresponse">
                    {/* {this.getPosts()} */}
                </div>
            </div>
        );
    }
}
  export default Tumblrdata;