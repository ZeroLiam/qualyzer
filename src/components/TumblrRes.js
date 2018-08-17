import React, { Component } from 'react';
// import _ from 'lodash';
//Purify the strings you want to get from the response
import createDOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import tumblrclient from './../lib/tumblrclient';
import PostBody from './postresponse/PostBody';
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

class TumblrRes extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            blogserr: "",
            // test for the innerHTML to pass when response = 200
            bodytest: ""
        }
    }
    
    componentDidMount(){

        // Show user's blog names /*TEST*/
        var promiseObj = new Promise((resolve, reject)=>{
            tumblrclient.userInfo((err, data)=>{
                    var k = [];
                    data.user.blogs.forEach((blog)=>{
                        k.push(blog.name);
                    });
                    resolve(k);
                    reject(err);
            });
        });

        promiseObj.then((successMsg)=>{
            this.setState({blogs: successMsg});
            this.getPostBody();
        }).catch((reason) => {
                console.log('Handle rejected promise ('+reason+') here.');
                this.setState({blogserr: reason.toString()});
            });


    }

    getPostBody(){
        var dirty = '<p>Refuse the hurt, deny the pain, pray that he won’t ask why I changed my name </p><figure class="tmblr-full" data-orig-height="707" data-orig-width="499" data-tumblr-attribution="obnubilata:mgSMkWjpmlZ7fK3v_SGoVg:ZXX0vj2N1Jlrx"><img src="https://78.media.tumblr.com/3f2ae147c0313a2c74a6c2edd9551fa9/tumblr_orztppsoWd1ubm6poo1_500.gif" data-orig-height="707" data-orig-width="499"/></figure>';
        var clean = DOMPurify.sanitize(dirty);
        
        this.setState({bodytest: clean});
    }

    render() {
        return (
            <div>
                <h4>Tumblr Response:</h4>
                {/* <p id="idResponse">{(this.state.blogserr === "") ? this.state.blogs.join(" || ") : this.state.blogserr}</p> */}
                {/* Print the response */}
                <div className="postresponse">
                    <PostBody clean={this.state.bodytest} />
                    <PostBody clean={this.state.bodytest} />
                    <PostBody clean={this.state.bodytest} />
                </div>
            </div>
        );
    }
}
  export default TumblrRes;