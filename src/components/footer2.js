import React, { Component } from "react";

class Footer2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.props.meualert}>Outro Alert Aqui que vem do App</button>
            </div>
        )    
    }
}

export default Footer2;