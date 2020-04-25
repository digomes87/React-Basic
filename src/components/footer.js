import React, { Component } from 'react'

// function Footer(props){
//     return(
//         <div>
//             <h1>Aqui um footer</h1>
//             <p>{props.page}</p>
//         </div>
//     )
// }

class Footer extends Component{
    createAlert(){
        alert('OI clicou no alert');
    }

    state = {
        name: '',
        city: ''
    }

    componentDidMount(){
        this.setState({name: 'Diego Go'});
        this.setState({city: 'Toledo'})
    }

    message = evt => {
        
        this.setState({name: evt.target.value});
        this.setState({city: evt.target.value});
        console.log(this.state.name);
        console.log(this.state.city);
    }

    render(){
        return(
            <div>
                <h1 onClick={this.createAlert}>Aqui um footer</h1>
                <p>{this.props.page}</p>
                <input value={this.state.name} onChange={this.message} />
                <input value={this.state.city} onChange={this.city} />
            </div>
        )
    }
}

export default Footer;