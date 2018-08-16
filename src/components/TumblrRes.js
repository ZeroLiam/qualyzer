import React, { Component } from 'react';
// import _ from 'lodash';
import tumblrclient from './../lib/tumblrclient';

class TumblrRes extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            blogserr: ""
        }
    }
    
    componentDidMount(){

        // Show user's blog names /*TEST*/
        var promiseObj = new Promise((resolve, reject)=>{
            tumblrclient.userInfo(function(err, data) {
                    var k = [];
                    data.user.blogs.forEach(function(blog) {
                        k.push(blog.name);
                    });
                    resolve(k);
                    reject(err);
            });
        });

        promiseObj.then((successMsg)=>{
            this.setState({blogs: successMsg});
        }).catch((reason) => {
                console.log('Handle rejected promise ('+reason+') here.');
                this.setState({blogserr: reason.toString()});
            });

    }

    render() {
        return (
            <div>
                <h4>Tumblr Response:</h4>
                <p id="idResponse">{(this.state.blogserr === "") ? this.state.blogs.join(" || ") : this.state.blogserr}</p>
            </div>
        );
    }
}
  export default TumblrRes;