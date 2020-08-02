import React from "react"

import "./Button.css"

function Button(props) {

    return (<div className={`button ${props.type} ${props.name == "0" ? "zero" : ""}`} onClick={() => props.handleClick(props.name)}>{props.name}</div>)
}


export default Button

