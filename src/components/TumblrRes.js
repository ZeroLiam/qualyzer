import React, { Component } from 'react';
import tumblr from 'tumblr.js';
import _ from 'lodash';
import tumblrconfig from './../lib/tumblrconfig';

class TumblrRes extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: []
        }
    }
    
    componentDidMount(){
        var client = tumblr.createClient({
            consumer_key: tumblrconfig.consumer_key,
            consumer_secret: tumblrconfig.consumer_secret,
            token: tumblrconfig.token,
            token_secret: tumblrconfig.token_secret
        });

        // Show user's blog names
        var promiseObj = new Promise((resolve, reject)=>{
            client.userInfo(function(err, data) {
                var k = [];
                data.user.blogs.forEach(function(blog) {
                    k.push(blog.name);
                });
                resolve(k);
            });
        });

        promiseObj.then((successMsg)=>{
            // console.log(successMsg);
            this.setState({blogs: successMsg});
        });

    }

    render() {

        return (
            <div>
                <h4>Tumblr Response:</h4>
                <p id="idResponse">{this.state.blogs}</p>
            </div>
        );
    }
}
  export default TumblrRes;