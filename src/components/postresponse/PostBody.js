import React, { Component } from 'react';
import PostTags from './PostTags';

class PostBody extends Component{

    getPostLink(){
        return "https://" + this.props.blogtitle + ".tumblr.com/";
    }

    render(){
        return(
            <div className="col-3 col-lg-4 postbody">
                <div className="card features">
                    <div className="card-body">
                        <div className="media">
                            <span className="ti-settings gradient-fill ti-3x mr-3"></span>
                            <div className="media-body">
                                <small><a href={this.getPostLink()}  target="_blank" rel="noopener noreferrer">{this.props.blogtitle}</a></small>
                                <div dangerouslySetInnerHTML={{ __html: this.props.clean }} />
                                <PostTags tags={this.props.tags} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PostBody;