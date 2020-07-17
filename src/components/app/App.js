import React from "react"

import Button from "../Button/Button";
import "./App.css"

function App() {

    return (
        <div className="App">
            <div className="top">8:12</div>
            <div className="display">0</div>
            <div className="buttons">
                <Button name="AC" type="function" />
                <Button name="±" type="function" />
                <Button name="%" type="function" />
                <Button name="÷" type="operator" />
                <Button name="7" type="number" />
                <Button name="8" type="number" />
                <Button name="9" type="number" />
                <Button name="x" type="operator" />
                <Button name="4" type="number" />
                <Button name="5" type="number" />
                <Button name="6" type="number" />
                <Button name="–" type="operator" />
                <Button name="1" type="number" />
                <Button name="2" type="number" />
                <Button name="3" type="number" />
                <Button name="+" type="operator" />
                <Button name="0" type="number" />
                <Button name="." type="number" />
                <Button name="=" type="operator" />
            </div>
            <div className="bottom">-</div>

        </div>)
}

export default App