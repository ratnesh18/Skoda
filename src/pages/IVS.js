import React, { Component } from 'react';

class IVS extends Component {

    componentDidMount(){
      this.startSocket();
    }

     startSocket(params) {
        console.log("socket starts");
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default IVS;