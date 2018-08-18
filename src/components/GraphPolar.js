import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import _ from 'lodash';

class GraphPolar extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataObj: {}
        }
    }

    componentDidMount(){
        var receivedData = this.props.graphdata;
        console.log('receivedData: ', receivedData);
    }

    calculateTypedata(){
        var thedata = {
            datasets: [{
            data: [
                8,
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

    //   console.log("res: ", this.props.graphdata);
    //   debugger;
      let totaltypes = {};
      _.forEach(this.props.graphdata, function(val, key) {
        totaltypes[key] = val.length;
      });

      thedata.datasets[0].data = _.map(thedata.datasets[0].data, (v,k)=>{
        switch(k){
            case 0:
                v = (totaltypes["text"] !== undefined) ? totaltypes["text"] : 0;
                break;
            case 1:
                v = (totaltypes["photo"] !== undefined) ? totaltypes["photo"] : 0;
                break;
            case 2:
                v = (totaltypes["quote"] !== undefined) ? totaltypes["quote"] : 0;
                break;
            case 3:
                v = (totaltypes["link"] !== undefined) ? totaltypes["link"] : 0;
                break;
            case 4:
                v = (totaltypes["chat"] !== undefined) ? totaltypes["chat"] : 0;
                break;
            case 5:
                v = (totaltypes["audio"] !== undefined) ? totaltypes["audio"] : 0;
                break;
            case 6:
                v = (totaltypes["video"] !== undefined) ? totaltypes["video"] : 0;
                break;
            case 7:
                v = (totaltypes["answer"] !== undefined) ? totaltypes["answer"] : 0;
                break;
            default:
                v = 0;
                break;
        }
        return v;
      });
      console.log("after data: ", thedata.datasets[0].data);
      if(thedata.datasets[0] != undefined){
        for(let x = 0; x < thedata.datasets[0].data.length; x++){
            let label = thedata.labels[x];
            let newval = thedata.datasets[0].data[x];
            thedata.labels[x] = label+ " " + newval;
        }
    }
    //   this.setState({dataObj: thedata});

    //   return(<Polar data={this.state.dataObj}/>);
        return thedata;
    }
    
    render() {
        return (
            <div className="graphs">
                <div id="grapharea">
                    {/* {(!_.isEmpty(this.props.graphdata) ? this.calculateTypedata() : '')} */}
                    <Polar data={(...args) =>this.calculateTypedata(...args)} />
                </div>
            </div>
        );
    }
}
  export default GraphPolar;