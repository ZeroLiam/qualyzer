import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';

class GraphPolar extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        var receivedData = this.props.graphdata;
        console.log(receivedData);
        
        var thedata = {
            datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14,
                12,
                2,
                10
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB',
                '#121212',
                '#c0c04b',
                '#FFFFE7'
            ],
            label: 'Posts by Type' // for legend
            }],
            labels: [
            'Text',
            'Photo',
            'Quote',
            'Link',
            'Chat',
            'Audio',
            'Video',
            'Answer'
            ]
      };

      this.setState({data: thedata});
        
    }
   
    render() {
        return (
            <div className="graphs">
                <div id="grapharea">
                    <Polar data={this.state.data} />
                </div>
            </div>
        );
    }
}
  export default GraphPolar;