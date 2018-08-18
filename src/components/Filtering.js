import React, { Component } from 'react';

class Filtering extends Component{
    constructor(props){
        super(props);

        this.state = {
            timestamp: 0,
            tag: "",
            limit: 20
        }

        //To pass to parent correctly
        this.gatherData = this.gatherData.bind(this);
    }

    componentDidMount(){
        // Limit the date query until today (per capability of Tumblr API)
        let today = new Date().toISOString().substr(0, 10);
        document.getElementById("datequery").setAttribute("value", today);
        document.getElementById("datequery").setAttribute("max", today);
    }

    handleChange(e){

        switch(e.target.id){
            case "limitquery":
                this.setState({limit: parseInt(e.target.value, 10)});
                break;
            case "datequery":
                this.setState({timestamp: Date.parse(e.target.value) /1000});
                break;
            case "tagquery":
                this.setState({tag: e.target.value});
                break;
            default:
                return;
        }
    }

    gatherData(e){
        console.log(this.state);
        let allQueryNeeded = {};

        if(this.state.timestamp !== 0 && this.state.tag !== ""){
            allQueryNeeded = {
                timestamp: this.state.timestamp,
                tag: this.state.tag,
                limit: this.state.limit
            }
            this.props.receiveQueryDetails(allQueryNeeded);
        }
    }

    render() {

        return (
            <div className="filtering-comp">
            {/* Queries */}
                <div className="input-group mb-3">
                    {/* Tag query */}
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="tagquery-label">(hash)Tag:</span>
                    </div>
                    <input type="text" className="form-control" placeholder="One tag per query" aria-label="tagquery" aria-describedby="tagquery" id="tagquery" onChange={(e) => this.handleChange(e)} />
                    
                    {/* Date query */}
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="datequery-label">Before Date:</span>
                    </div>
                    <input type="date" className="form-control" aria-label="datequery" aria-describedby="datequery" id="datequery" onChange={(e) => this.handleChange(e)} />
                    
                    {/* Limit query */}
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="limitquery-label">How many posts?</span>
                    </div>
                    <input type="number" className="form-control" aria-label="limitquery" placeholder="max 20" min="1" max="20" aria-describedby="limitquery" id="limitquery" onChange={(e) => this.handleChange(e)} />

                    {/* Submit */}
                    <button id="submitquery" className="btn btn-outline-secondary" type="button" onClick={(e) => this.gatherData(e)}>Get Data!</button>
                </div>
                
            </div>
        );
    }
}
  export default Filtering;