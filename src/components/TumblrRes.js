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

class TumblrRes extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            blogserr: "",
            // test for the innerHTML to pass when response = 200
            bodytest: "",
            tags: [],
            datares: {}
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

    getPosts(){
        
        return _.map(this.state.blogs, (val, i) => {
              return (
                  <PostBody key={i} clean={this.state.bodytest} tags={this.state.blogs} blogtitle={val} />
              )
        });
    }

    render() {
        return (
            <div className="tumblrres">
                <h3>Posts found:</h3>
                <div className="postresponse">
                    {this.getPosts()}
                </div>
            </div>
        );
    }
}
  export default TumblrRes;