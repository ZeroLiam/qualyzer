import React, { Component } from 'react';

class PostTags extends Component{

    render(){
        return(
            <div className="posttags">
                <p>#{this.props.tags.join(" #")}</p>
            </div>
        );
    }
}
export default PostTags;