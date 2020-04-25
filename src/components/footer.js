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

    render(){
        return(
            <div>
                <h1 onClick={this.createAlert}>Aqui um footer</h1>
                <p>{this.props.page}</p>
            </div>
        )
    }
}

export default Footer;