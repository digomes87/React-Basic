import React from 'react'

function Footer(props){
    return(
        <div>
            <h1>Aqui um footer</h1>
            <p>{props.page}</p>
        </div>
    )
}

export default Footer;