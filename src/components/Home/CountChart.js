import React, { Component } from 'react'
import openSocket from 'socket.io-client'

const socket = openSocket('http://192.168.0.106:8000');

function subscribeToServer(att_type, callback){
    socket.on(att_type, res => callback(null, res));
    socket.emit('sub_' + att_type, att_type);
}

class CountChart extends Component{
    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('Component Did mount...');
        subscribeToServer('AA', (err, res) =>{
            console.log(res);
            this.setState({
                res:res
            });
        })
    }
    state ={
        res:1
    };

    render(){
        return (
            <div>
                <p>{this.state.res}</p>
            </div>
        );
    }
}

export default CountChart;