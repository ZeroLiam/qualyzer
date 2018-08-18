import React, { Component } from 'react';

class GraphWordcloud extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        
        
    }
   
    render() {
        return (
            <div className="graphs">
                <div id="grapharea">
                    <div id="chart"></div>
                </div>
            </div>
        );
    }
}
  export default GraphWordcloud;