import React, { Component } from 'react';
import _ from 'lodash';
//Purify the strings you want to get from the response
//because you don't want a random injection to whatever
//you're pulling from the Tumblr dot com lol
// import createDOMPurify from "dompurify";
// import { JSDOM } from 'jsdom';
import xss from 'xss';
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

    getPosts(){

        console.log(this.props.fillData);
        return _.map(this.props.fillData, (val, i)=>{
            var dirty = null;
            var isPhoto = null;
            var isVideo = null;

            if(val.type === "photo"){
                isPhoto = "<img src='" + val.photos[0].alt_sizes[0].url +"' />";
                dirty = val.caption;
            }else if(val.type === "video"){
                isVideo = val.player[0].embed_code;
                dirty = val.reblog.comment;
            }else{
                dirty = val.reblog.comment;
            }

            var cleanhtml =  xss(dirty);
            var alltags = val.tags;
            var title = val.blog_name;
            var type = val.type;
            var postlink = val.post_url;

            return (
                <PostBody key={i} clean={cleanhtml} tags={alltags} blogtitle={title} blogtype={type} posturl={postlink} postimage={(isPhoto !== null) ? isPhoto : ''} postvideo={(isVideo !== null) ? isVideo : ''} />
            )
        });
        /* blog_name
            caption
            type
            Tags
            post_url */
        
        
        // return _.map(this.state.blogs, (val, i) => {
        //       return (
        //           <PostBody key={i} clean={this.state.bodytest} tags={this.state.blogs} blogtitle={val} />
        //       )
        // });
    }

    render() {
        this.getPosts();
        return (
            <div className="tumblrdata">
                <h3>Posts found:</h3>
                <div className="postresponse">
                    {this.getPosts()}
                    {/* {(!_.isEmpty(this.props.fillData)) ? (...args) =>this.getPosts(...args) : ''} */}
                </div>
            </div>
        );
    }
}
  export default Tumblrdata;