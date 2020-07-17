import React from "react"

import "./Button.css"

function Button(props) {

    return (<div className={`button ${props.type} ${props.name == "0" ? "zero" : ""}`}>{props.name}</div>)
}


export default Button