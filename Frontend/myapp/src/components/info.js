import React from 'react';
import axios from 'axios';
const util=require('util');


export default class ComputerInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info: "Loading"
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/infoo')
            .then(response => {
                console.log("response.data",response.data)
                this.setState({ response: response.data });  // set state variable with received data
                console.log("Received data",this.state.todos)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                <h3>PC INFO</h3>
                <pre>{util.inspect(this.state.response,false,10)}</pre>
            </div>
        )
    }        
}