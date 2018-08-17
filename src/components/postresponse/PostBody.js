import React, { Component } from 'react';

class PostBody extends Component{

    render(){
        return(
            <div className="col-6 col-lg-4 postbody">
                <div className="card features">
                    <div className="card-body">
                        <div className="media">
                            <span className="ti-settings gradient-fill ti-3x mr-3"></span>
                            <div className="media-body">
                                <div dangerouslySetInnerHTML={{ __html: this.props.clean }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PostBody;